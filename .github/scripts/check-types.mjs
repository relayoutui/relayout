// Checks that TypeScript finds the types of the package as npm ships it. It packs the package, installs the
// tarball into an empty project, and compiles a file that imports from it under each module resolution a
// project can use. The files `types` and `exports` name have to exist, and the declarations have to resolve
// everything they import: a Row has to be a real HTMLElement, and document.createElement('rl-row') has to
// be a Row.
//
//   node .github/scripts/check-types.mjs
//
// Runs as the last step of `npm run build`, so it needs the build's output in dist. Needs npm and the
// network: the project gets Lit from the registry.

import { spawnSync } from 'node:child_process';
import { mkdirSync, mkdtempSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { createRequire } from 'node:module';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = fileURLToPath(new URL('../../', import.meta.url));
const TSC = createRequire(import.meta.url).resolve('typescript/lib/tsc.js');

// What a project can set, as tsc's options. Every one is strict, and none skips the declaration files
// (skipLibCheck): a declaration that imports something it can't find is the failure to catch.
const RESOLUTIONS = [
    { name: 'node', options: ['--module', 'esnext', '--moduleResolution', 'node'] },
    { name: 'bundler', options: ['--module', 'esnext', '--moduleResolution', 'bundler'] },
    { name: 'nodenext', options: ['--module', 'nodenext'] },
];

// Same<A, B> is true only when A and B are the same type. When a declaration can't resolve an import, Row
// loses its base class, and with it classList and updateComplete, so the lines that read them fail.
const CONSUMER = `import { Column, Div, Divider, Frame, Grid, Row } from '@relayoutui/relayout';

type Same<A, B> = (<T>() => T extends A ? 1 : 2) extends (<T>() => T extends B ? 1 : 2) ? true : false;

const tags: [
    Same<HTMLElementTagNameMap['rl-column'], Column>,
    Same<HTMLElementTagNameMap['rl-row'], Row>,
    Same<HTMLElementTagNameMap['rl-grid'], Grid>,
    Same<HTMLElementTagNameMap['rl-frame'], Frame>,
    Same<HTMLElementTagNameMap['rl-divider'], Divider>,
    Same<HTMLElementTagNameMap['rl-div'], Div>,
] = [true, true, true, true, true, true];

const row = document.createElement('rl-row');
const created: Same<typeof row, Row> = true;
const isHtmlElement: Same<typeof row.classList, DOMTokenList> = true;
const isLitElement: Same<typeof row.updateComplete, Promise<boolean>> = true;

export { created, isHtmlElement, isLitElement, tags };
`;

function fail(message)
{
    console.error(process.env.GITHUB_ACTIONS ? `::error::${message}` : `check-types: ${message}`);
    process.exit(1);
}

/** Runs a command without a shell. */
function run(cmd, args, cwd)
{
    const result = spawnSync(cmd, args, { cwd, encoding: 'utf8' });
    if (result.error) fail(`${cmd} didn't start: ${result.error.message}`);
    return { ok: result.status === 0, out: (result.stdout ?? '').trim(), err: (result.stderr ?? '').trim() };
}

const manifest = JSON.parse(readFileSync(join(ROOT, 'package.json'), 'utf8'));
const work = mkdtempSync(join(tmpdir(), 'relayout-types-'));

try
{
    const pack = run('npm', ['pack', '--ignore-scripts', '--silent', '--pack-destination', work], ROOT);
    if (!pack.ok) fail(`npm pack failed:\n${pack.err}`);
    const tarball = join(work, pack.out.split('\n').pop());

    // The project: the package, and the Lit its declarations import. The package doesn't depend on Lit
    // yet, so a project that wants the types installs it itself. It gets the version the package builds with.
    const project = join(work, 'project');
    mkdirSync(project);
    writeFileSync(join(project, 'package.json'), JSON.stringify({ name: 'consumer', private: true, type: 'module' }));
    const lit = { ...manifest.devDependencies, ...manifest.dependencies }.lit;
    const install = run('npm', ['install', '--ignore-scripts', '--no-audit', '--no-fund', '--loglevel=error', tarball, `lit@${lit}`], project);
    if (!install.ok) fail(`npm install of the packed package failed:\n${install.err}`);
    writeFileSync(join(project, 'index.ts'), CONSUMER);

    let failed = false;
    for (const { name, options } of RESOLUTIONS)
    {
        const args = [TSC, '--noEmit', '--strict', '--skipLibCheck', 'false', '--target', 'es2022', '--lib', 'es2022,dom', ...options, 'index.ts'];
        const compile = run(process.execPath, args, project);
        if (compile.ok)
        {
            console.log(`✓ ${manifest.name} types resolve with moduleResolution ${name}`);
        }
        else
        {
            failed = true;
            console.error(`✗ ${manifest.name} types don't resolve with moduleResolution ${name}:\n${compile.out}`);
        }
    }
    if (failed) fail('the packed package is not usable from TypeScript, see above');
}
finally
{
    rmSync(work, { recursive: true, force: true });
}
