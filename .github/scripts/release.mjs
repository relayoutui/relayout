// The steps of a release, for the Release button (release.yml) and publish.yml's last job. They make
// the checks of ai-kit's release-next that need no npm login. npm's approval with 2FA stays the gate:
// publish.yml only stages each version.
//
//   node .github/scripts/release.mjs tag [vX.Y.Z] [--dry-run]
//       Checks the next release, then tags main's head with it (annotated) and pushes the tag. The
//       version defaults to the next patch after the last release. In a workflow, the tag goes to
//       GITHUB_OUTPUT as `tag`.
//   node .github/scripts/release.mjs finish vX.Y.Z
//       Waits until npm serves the version (WAIT_MINUTES, 60 by default), then publishes the GitHub
//       release: the draft if there is one, else one with generated notes. A release that is already
//       published, by release-next for instance, is left as it is.
//
// Needs git, npm, and gh signed in (GH_TOKEN in a workflow). Run from the repo's root.

import { spawnSync } from 'node:child_process';
import { appendFileSync, readFileSync } from 'node:fs';

const WAIT_MS = Number(process.env.WAIT_MINUTES ?? 60) * 60 * 1000;
const POLL_MS = 30 * 1000;
const NOTICE_MS = 5 * 60 * 1000;
// The files npm packs or builds from; a release that changes none of them ships the same code
const PACKAGE_FILE = /^(src\/|package(-lock)?\.json$|readme|licen[cs]e|[^/]*\.config\.[cm]?[jt]s$|tsconfig[^/]*\.json$)/i;
const ICON = { ok: '✓', bad: '✗', skip: '-' };

function fail(message)
{
    console.error(process.env.GITHUB_ACTIONS ? `::error::${message}` : `release: ${message}`);
    process.exit(1);
}

/** Runs a command without a shell; its arguments are names, versions and tags. */
function run(cmd, args)
{
    const result = spawnSync(cmd, args, { encoding: 'utf8' });
    if (result.error) fail(`${cmd} didn't start: ${result.error.message}`);
    return { ok: result.status === 0, out: (result.stdout ?? '').trim(), err: (result.stderr ?? '').trim() };
}

const git = (...args) => run('git', args);
const sleep = ms => new Promise(done => setTimeout(done, ms));

function parse(tag)
{
    const m = /^v(\d+)\.(\d+)\.(\d+)$/.exec(tag);
    return m && m.slice(1).map(Number);
}

function compare(a, b)
{
    const [x, y] = [parse(a), parse(b)];
    return x[0] - y[0] || x[1] - y[1] || x[2] - y[2];
}

/** The release tags, oldest first. */
function releaseTags()
{
    return git('tag', '--list', 'v*').out.split('\n').filter(parse).sort(compare);
}

/** owner/name on GitHub: the workflow's, or the origin remote's. */
function githubRepo()
{
    if (process.env.GITHUB_REPOSITORY) return process.env.GITHUB_REPOSITORY;
    const url = git('remote', 'get-url', 'origin').out;
    return /github\.com[/:]([^/]+\/[^/]+?)(\.git)?$/.exec(url)?.[1] ?? fail(`origin (${url}) isn't on GitHub`);
}

function onNpm(name, version)
{
    return run('npm', ['view', `${name}@${version}`, 'version', '--prefer-online']).out === version;
}

/** The GitHub release of a tag, or null. gh finds a draft by its tag name too. */
function release(repo, tag)
{
    const r = run('gh', ['release', 'view', tag, '--repo', repo, '--json', 'isDraft,url']);
    return r.ok ? JSON.parse(r.out) : null;
}

// ── tag ──────────────────────────────────────────────────────────────────────────────────────────
function tag(wanted, dryRun)
{
    const pkg = JSON.parse(readFileSync('package.json', 'utf8'));
    const repo = githubRepo();
    if (!git('fetch', '--quiet', '--tags', 'origin', 'main').ok) fail(`could not fetch main and the tags from ${repo}`);
    const head = git('rev-parse', 'HEAD').out;
    const main = git('rev-parse', 'origin/main').out;
    const tags = releaseTags();
    const last = tags.at(-1);

    let next = wanted;
    if (next)
    {
        if (!parse(next)) fail(`the version must look like v1.2.3, got '${next}'`);
        if (tags.includes(next)) fail(`${next} is already tagged`);
        if (last && compare(next, last) <= 0) fail(`${next} isn't after the last release, ${last}`);
    }
    else if (last)
    {
        const [major, minor, patch] = parse(last);
        next = `v${major}.${minor}.${patch + 1}`;
    }
    else
    {
        fail('no release tag yet; pass a version, e.g. v0.1.0');
    }

    const commits = last ? git('log', '--first-parent', '--format=%h %s', `${last}..HEAD`).out.split('\n').filter(Boolean) : [];
    const files = last ? git('diff', '--name-only', last, 'HEAD').out.split('\n').filter(Boolean) : [];
    const packageFiles = files.filter(file => PACKAGE_FILE.test(file));

    console.log(`Next release of ${repo} (${pkg.name})`);
    console.log('');
    console.log(`  Last release:  ${last ? `${last} (${git('log', '-1', '--format=%cs', last).out})` : 'none'}`);
    console.log(`  Next version:  ${next}${wanted ? '' : '  (the next patch; pass a version for a minor or major)'}`);
    console.log(`  On commit:     ${git('log', '-1', '--format=%h %s (%ar)', 'HEAD').out}`);
    if (last)
    {
        console.log(`  Since ${last}:  ${commits.length} commit(s)`);
        for (const line of commits.slice(0, 15)) console.log(`                 ${line}`);
        if (commits.length > 15) console.log('                 …');
        console.log(`  Package files: ${packageFiles.length ? packageFiles.slice(0, 10).join(', ') : 'none'}${packageFiles.length > 10 ? ', …' : ''}`);
    }

    const checks = [];
    const check = (level, name, detail) => checks.push({ level, name, detail });

    if (head !== main) check(dryRun ? 'skip' : 'bad', 'commit', `this is ${head.slice(0, 7)}, not main's head ${main.slice(0, 7)}: a release tags main`);
    else check('ok', 'commit', 'main\'s head');

    if (last)
    {
        const lastVersion = last.slice(1);
        const lastRelease = release(repo, last);
        if (!onNpm(pkg.name, lastVersion)) check('bad', 'last', `${last} is tagged but not on npm. Approve it on npmjs.com (Staged packages), or re-run its publish run if it failed`);
        else if (lastRelease?.isDraft !== false) check('bad', 'last', `${last} is on npm but has no published GitHub release. Re-run the GitHub release job of its publish run`);
        else check('ok', 'last', `${last} is on npm and released`);
    }

    if (last && !commits.length) check('bad', 'changes', `nothing on main since ${last}`);
    else if (last && !packageFiles.length) check('ok', 'changes', 'CI or docs only: the package code is the same as in the last release');

    const view = run('npm', ['view', pkg.name, 'versions', 'deprecated', '--json', '--prefer-online']);
    // npm returns an object only when both fields exist; without a deprecation it returns the bare versions
    const raw = view.ok ? JSON.parse(view.out) : null;
    const info = raw === null ? null
        : Array.isArray(raw) || typeof raw === 'string' ? { versions: [].concat(raw) }
        : { versions: [].concat(raw.versions ?? []), deprecated: raw.deprecated };
    if (pkg.private) check('bad', 'package', `${pkg.name} is private in package.json`);
    else if (!info) check('bad', 'package', `${pkg.name} isn't on npm. A trusted publisher needs the package to exist: publish its first version by hand`);
    else if (info.deprecated) check('bad', 'package', `${pkg.name} is deprecated on npm ("${info.deprecated}")`);
    else check('ok', 'package', `${pkg.name} is on npm`);

    const repoUrl = String(pkg.repository?.url ?? pkg.repository ?? '');
    if (!repoUrl.toLowerCase().includes(`github.com/${repo.toLowerCase()}`)) check('bad', 'repository', `package.json says '${repoUrl}'. npm rejects a provenance publish unless it names github.com/${repo}`);
    else check('ok', 'repository', `github.com/${repo}`);

    if (info?.versions.includes(next.slice(1))) check('bad', 'version', `${next.slice(1)} is already on npm`);
    else check('ok', 'version', `${next.slice(1)} is free on npm`);

    check('skip', 'staged', 'not checked: it needs your npm login. npmjs.com shows what waits, under Staged packages');

    console.log('');
    for (const { level, name, detail } of checks) console.log(`  ${ICON[level]} ${name.padEnd(12)} ${detail}`);
    console.log('');
    if (checks.some(c => c.level === 'bad')) fail('fix the ✗ above first. Nothing tagged');
    if (dryRun)
    {
        console.log('Dry run: nothing tagged.');
        return;
    }

    if (!git('tag', '-a', next, 'HEAD', '-m', `Release ${next}`).ok) fail(`could not create the tag ${next}. Is there a local tag of that name?`);
    if (!git('push', '--quiet', 'origin', `refs/tags/${next}`).ok)
    {
        git('tag', '-d', next);
        fail(`pushing ${next} failed; nothing changed on GitHub`);
    }
    console.log(`Tagged ${next} on ${head.slice(0, 7)} and pushed it.`);
    if (process.env.GITHUB_OUTPUT) appendFileSync(process.env.GITHUB_OUTPUT, `tag=${next}\n`);
}

// ── finish ───────────────────────────────────────────────────────────────────────────────────────
async function finish(releaseTag)
{
    if (!parse(releaseTag)) fail(`finish takes a release tag like v1.2.3, got '${releaseTag}'`);
    const pkg = JSON.parse(readFileSync('package.json', 'utf8'));
    const repo = githubRepo();
    const version = releaseTag.slice(1);

    // npm serves the version once you approve it, and its review allows that only a few minutes
    // after staging. Waiting here keeps the GitHub release from appearing before the package does.
    const started = Date.now();
    let noticed = -Infinity;
    while (!onNpm(pkg.name, version))
    {
        if (Date.now() - started > WAIT_MS)
        {
            fail(`npm doesn't serve ${pkg.name}@${version} yet. Approve it on npmjs.com (Staged packages), then re-run this job`);
        }
        if (Date.now() - noticed >= NOTICE_MS)
        {
            console.log(`Waiting for npm to serve ${pkg.name}@${version}: approve it on npmjs.com (Staged packages), with 2FA.`);
            noticed = Date.now();
        }
        await sleep(POLL_MS);
    }
    console.log(`npm serves ${pkg.name}@${version}.`);

    const existing = release(repo, releaseTag);
    if (existing && !existing.isDraft)
    {
        console.log(`${releaseTag} is already released: ${existing.url}`);
        return;
    }
    if (existing?.isDraft)
    {
        const published = run('gh', ['release', 'edit', releaseTag, '--repo', repo, '--draft=false']);
        if (!published.ok) fail(`gh release edit failed: ${published.err}`);
    }
    else
    {
        const since = releaseTags().filter(t => compare(t, releaseTag) < 0).at(-1);
        const created = run('gh', ['release', 'create', releaseTag, '--repo', repo, '--verify-tag', '--title', releaseTag, '--generate-notes', ...(since ? ['--notes-start-tag', since] : [])]);
        // release-next publishes the release too, once npm serves the version: the second one finds it
        if (!created.ok && release(repo, releaseTag)?.isDraft !== false) fail(`gh release create failed: ${created.err}`);
    }
    console.log(`Released ${releaseTag}: ${release(repo, releaseTag)?.url ?? `https://github.com/${repo}/releases/tag/${releaseTag}`}`);
}

// ── Command line ─────────────────────────────────────────────────────────────────────────────────
const [command, ...rest] = process.argv.slice(2);
const flags = rest.filter(arg => arg.startsWith('--'));
const [version] = rest.filter(arg => arg && !arg.startsWith('--'));
const unknown = flags.filter(flag => command !== 'tag' || flag !== '--dry-run');
if (unknown.length) fail(`unknown option for ${command}: ${unknown.join(', ')}`);

if (command === 'tag') tag(version, flags.includes('--dry-run'));
else if (command === 'finish') await finish(version ?? fail('finish needs the release tag, e.g. finish v1.2.3'));
else fail('usage: release.mjs tag [vX.Y.Z] [--dry-run] | release.mjs finish vX.Y.Z');
