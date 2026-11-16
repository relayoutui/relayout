// Makes the rules of <rl-div> from the compiled relayout.css, so each class is written once, in src/scss. rl-div takes
// every class on itself, through `class`, so the rules map one to one:
//
//   .rl-gap-m                       :host(.rl-gap-m)
//   .rl-column.rl-align-center      :host(.rl-column.rl-align-center)
//   .rl-row > .rl-width-fill        :host(.rl-row) ::slotted(.rl-width-fill)
//
// The @layer, @media and @supports around a rule stay around it, and so does the order of the rules, so the element's
// rules win over each other as the classes do. A rule for :root is left out: the variables it sets reach the element
// from the page, which loads relayout.css. A rule for rl-div itself is left out too: it is the page's, for the element
// before its script runs, and the element has its own (src/js/div.ts). A selector that maps to none of the three forms
// stops the build, so a rule added to the SCSS is never left out of the element without a word.
//
//   node .github/scripts/element-rules.mjs
//
// Runs in `npm run build`, after the CSS and before the script, which imports what it writes:
// src/js/generated/class-rules.ts.

import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import postcss from 'postcss';

const ROOT = fileURLToPath(new URL('../../', import.meta.url));
const SOURCE = join(ROOT, 'dist/css/relayout.css');
const TARGET = join(ROOT, 'src/js/generated/class-rules.ts');
const ELEMENT = 'rl-div';

/** A selector that this script can't map, with the reason. */
class UnmappedSelectorError extends Error
{
    constructor(selector, reason)
    {
        super(`can't make a rule of ${ELEMENT} from '${selector}': ${reason}`);
        this.name = 'UnmappedSelectorError';
    }
}

/**
 * Splits a selector into its compound selectors and the combinators between them, at the top level only: a space or
 * a `>` inside brackets, parentheses or quotes is part of a compound, as in `[hidden="until-found" i]`.
 * @param {string} selector one selector of a rule, with no comma
 * @returns {{ compounds: string[], combinators: string[] }} the compounds in order, and the n - 1 combinators
 */
function split(selector)
{
    const compounds = [];
    const combinators = [];
    let current = '';
    let depth = 0;
    let quote = '';
    let pending = '';

    const close = () =>
    {
        if (!current) return;
        if (compounds.length) combinators.push(pending.trim() || ' ');
        compounds.push(current);
        current = '';
        pending = '';
    };

    for (let index = 0; index < selector.length; index++)
    {
        const char = selector[index];
        if (quote)
        {
            current += char;
            if (char === '\\') current += selector[++index] ?? '';
            else if (char === quote) quote = '';
            continue;
        }
        if (char === '\\')
        {
            current += char + (selector[++index] ?? '');
            continue;
        }
        if (char === '"' || char === '\'')
        {
            quote = char;
            current += char;
            continue;
        }
        if (char === '[' || char === '(') depth++;
        if (char === ']' || char === ')') depth--;
        if (depth === 0 && /[\s>+~]/.test(char))
        {
            close();
            if (!/\s/.test(char)) pending += char;
            continue;
        }
        current += char;
    }
    close();
    return { compounds, combinators };
}

/**
 * The selector of the element's rule for one selector of relayout.css.
 * @param {string} selector one selector of a rule, with no comma
 * @returns {string | undefined} the element's selector, or undefined for a selector the element leaves to the page
 */
function mapSelector(selector)
{
    if (selector === ':root') return undefined;
    if (selector === ELEMENT || selector.startsWith(`${ELEMENT}:`) || selector.startsWith(`${ELEMENT}[`)) return undefined;

    const { compounds, combinators } = split(selector);
    for (const compound of compounds)
    {
        if (compound.includes('::')) throw new UnmappedSelectorError(selector, 'this script maps no pseudo-element');
        if (/^[a-z]/i.test(compound) && compound.split(/[.[:#]/)[0] === ELEMENT) throw new UnmappedSelectorError(selector, `${ELEMENT} in a compound selector`);
    }
    if (compounds.length === 1) return `:host(${compounds[0]})`;
    if (compounds.length === 2 && combinators[0] === '>') return `:host(${compounds[0]}) ::slotted(${compounds[1]})`;
    throw new UnmappedSelectorError(selector, 'only a selector of the element itself, or of its direct child, has a form inside a shadow root');
}

/**
 * The element's rules: every rule of the style sheet with its selectors mapped, inside the at-rules it was in.
 * @param {string} css relayout.css
 * @returns {string} the element's style sheet
 */
export function elementRules(css)
{
    const root = postcss.parse(css);
    root.walkComments(comment => comment.remove());
    root.walkRules(rule =>
    {
        const selectors = rule.selectors.map(selector => mapSelector(selector.trim())).filter(Boolean);
        if (selectors.length) rule.selectors = selectors;
        else rule.remove();
    });
    // An at-rule whose rules were all the page's, such as the dark colors on :root, is left with nothing in it
    let removed = true;
    while (removed)
    {
        removed = false;
        root.walkAtRules(atRule =>
        {
            if (atRule.nodes && atRule.nodes.length === 0)
            {
                atRule.remove();
                removed = true;
            }
        });
    }
    root.raws.after = '';
    return root.toString().trim();
}

function main()
{
    const rules = elementRules(readFileSync(SOURCE, 'utf8'));
    const module = `// Made by .github/scripts/element-rules.mjs from dist/css/relayout.css, at each build: change the SCSS in src/scss,
// not this file. The rules of relayout.css as rules of <rl-div>, in the same order.
import { unsafeCSS } from 'lit';

export const classRules = unsafeCSS(${JSON.stringify(rules)});
`;
    mkdirSync(dirname(TARGET), { recursive: true });
    writeFileSync(TARGET, module);
    console.log(`✓ ${ELEMENT}'s rules made from ${SOURCE.slice(ROOT.length)}, in ${TARGET.slice(ROOT.length)}`);
}

if (process.argv[1] === fileURLToPath(import.meta.url))
{
    try
    {
        main();
    }
    catch (error)
    {
        console.error(process.env.GITHUB_ACTIONS ? `::error::${error.message}` : `element-rules: ${error.message}`);
        process.exit(1);
    }
}
