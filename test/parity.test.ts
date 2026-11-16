import { describe, expect, it } from 'vitest';
import '../dist/css/relayout.css';
import relayoutCss from '../dist/css/relayout.css?raw';
import '../dist/js/relayout.js';

// Every class of relayout.css works on <rl-div> through `class`, in the page and inside another component's shadow
// root, where the page's relayout.css doesn't reach and the element's own rules are all there is. For each class,
// alone and beside each layout, and for each rule a layout sets on its child, this puts a div with the classes in the
// page and an <rl-div> with them in each place, and compares what the browser computes for them and for their
// children: every property, and the position and size of every box. The classes and the rules are read from
// relayout.css, so a class added to the SCSS is compared without a change here.

type Place = 'the page' | 'a shadow root';

interface Variant
{
    // classes on the outer box
    host: string[];
    // classes on its first child, for the rules a layout sets on its children
    child: string[];
    label: string;
}

interface Box
{
    box: string;
    properties: Record<string, string>;
}

const LAYOUTS = ['rl-column', 'rl-row', 'rl-grid', 'rl-frame'];
const PLACES: Place[] = ['the page', 'a shadow root'];

// The browser gives a div `unicode-bidi: isolate` and an element it doesn't know `normal`, and no rule of Relayout sets it
const IGNORED = new Set(['unicode-bidi']);
const STAGE = { width: 480, height: 240 };
const IMAGE = 'data:image/svg+xml,' + encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" width="600" height="300"/>');
const CLASS = /\.(rl-[\w-]+)/g;

/** Splits at a character outside brackets, parentheses and quotes, as a selector list at its commas. */
function splitOutside(text: string, separator: string): string[]
{
    const parts: string[] = [];
    let depth = 0;
    let quote = '';
    let current = '';
    for (const char of text)
    {
        if (quote)
        {
            if (char === quote) quote = '';
        }
        else if (char === '"' || char === '\'') quote = char;
        else if (char === '[' || char === '(') depth++;
        else if (char === ']' || char === ')') depth--;
        else if (char === separator && depth === 0)
        {
            parts.push(current.trim());
            current = '';
            continue;
        }
        current += char;
    }
    parts.push(current.trim());
    return parts;
}

/** Every selector of relayout.css, inside @layer and @media too. */
function selectorsOf(css: string): string[]
{
    const sheet = new CSSStyleSheet();
    sheet.replaceSync(css);
    const found: string[] = [];
    const walk = (rules: CSSRuleList): void =>
    {
        for (const rule of rules)
        {
            if (rule instanceof CSSStyleRule) found.push(...splitOutside(rule.selectorText, ','));
            else if ('cssRules' in rule) walk((rule as CSSGroupingRule).cssRules);
        }
    };
    walk(sheet.cssRules);
    return found;
}

const classesIn = (selector: string): string[] => [...selector.matchAll(CLASS)].map(match => match[1]);

/**
 * The variants to compare: no class; each class alone; each class beside each layout; the classes of each rule, with
 * those of a rule for a layout's child on the child; and each class on a child of each layout, where a layout's rule
 * for its children meets the child's own rules.
 */
function variants(): Variant[]
{
    const selectors = selectorsOf(relayoutCss);
    const classes = [...new Set(selectors.flatMap(classesIn))].sort();
    const found = new Map<string, Variant>();
    const add = (host: string[], child: string[]): void =>
    {
        const unique = [...new Set(host)];
        const onHost = unique.length ? unique.join(' ') : 'no class';
        const label = child.length ? `${onHost}, and ${child.join(' ')} on a child` : onHost;
        found.set(label, { host: unique, child, label });
    };

    add([], []);
    for (const name of classes) add([name], []);
    for (const layout of LAYOUTS) for (const name of classes) add([layout, name], []);
    for (const selector of selectors)
    {
        const [host, child] = splitOutside(selector, '>');
        add(classesIn(host), child === undefined ? [] : classesIn(child));
    }
    for (const layout of LAYOUTS) for (const name of classes) add([layout], [name]);
    return [...found.values()];
}

/** The outer box with its children, in the class form or the element form: a div with the classes, or an <rl-div>. */
function markup(variant: Variant, element: boolean): HTMLElement
{
    const host = document.createElement(element ? 'rl-div' : 'div');
    if (variant.host.length) host.className = variant.host.join(' ');

    const short = document.createElement(element && variant.child.length ? 'rl-div' : 'div');
    short.textContent = 'Short';
    if (variant.child.length) short.className = variant.child.join(' ');

    const long = document.createElement('div');
    long.textContent = 'A longer text that wraps when the space runs out, and a few more words to make it take three lines.';

    const image = document.createElement('img');
    image.src = IMAGE;

    host.append(short, long, image);
    return host;
}

function stageOf(): HTMLElement
{
    const stage = document.createElement('div');
    stage.style.cssText = `position: absolute; left: 0; top: 0; width: ${STAGE.width}px; height: ${STAGE.height}px; `
        + 'font: 16px/20px sans-serif; display: block;';
    document.body.append(stage);
    return stage;
}

/** The variant on the stage: in the page, or in the shadow root of a component, which has no style of its own. */
function build(variant: Variant, element: boolean, place: Place): { stage: HTMLElement; root: HTMLElement }
{
    const stage = stageOf();
    const root = markup(variant, element);
    if (place === 'the page')
    {
        stage.append(root);
    }
    else
    {
        // As tall as the stage, as the stage is the parent of the box in the page, for the frame's height: 100%
        const component = document.createElement('div');
        component.style.height = '100%';
        component.attachShadow({ mode: 'open' }).append(root);
        stage.append(component);
    }
    return { stage, root };
}

/** The outer box and its children. */
function measure(stage: HTMLElement, root: HTMLElement): Box[]
{
    const origin = stage.getBoundingClientRect();
    return [root, ...root.children].map(element =>
    {
        const style = getComputedStyle(element);
        const rect = element.getBoundingClientRect();
        const properties: Record<string, string> = {};
        for (const name of style) properties[name] = style.getPropertyValue(name);
        const box = [rect.left - origin.left, rect.top - origin.top, rect.width, rect.height]
            .map(value => Math.round(value * 100) / 100).join(' ');
        return { box, properties };
    });
}

/** What differs, one line each. */
function differences(classForm: Box[], elementForm: Box[]): string[]
{
    return classForm.flatMap((expected, index) =>
    {
        const actual = elementForm[index];
        const name = index === 0 ? 'outer' : `child ${index}`;
        const lines = Object.keys({ ...expected.properties, ...actual.properties })
            .filter(property => !IGNORED.has(property) && expected.properties[property] !== actual.properties[property])
            .map(property => `${name} ${property}: class ${expected.properties[property]}, element ${actual.properties[property]}`);
        if (expected.box !== actual.box) lines.push(`${name} box (x y width height): class ${expected.box}, element ${actual.box}`);
        return lines;
    });
}

/** A div with the classes in the page, and an <rl-div> with them in the place, measured once their images have loaded. */
async function compare(variant: Variant, place: Place): Promise<string[]>
{
    const classForm = build(variant, false, 'the page');
    const elementForm = build(variant, true, place);
    try
    {
        const elements = [elementForm.root, ...elementForm.root.querySelectorAll('rl-div')] as (HTMLElement & { updateComplete: Promise<boolean> })[];
        await Promise.all(elements.map(element => element.updateComplete));
        const images = [...classForm.root.querySelectorAll('img'), ...elementForm.root.querySelectorAll('img')];
        await Promise.all(images.map(image => image.decode()));
        return differences(measure(classForm.stage, classForm.root), measure(elementForm.stage, elementForm.root));
    }
    finally
    {
        classForm.stage.remove();
        elementForm.stage.remove();
    }
}

const VARIANTS = variants();

describe('the classes of relayout.css', () =>
{
    it('are read from the style sheet', () =>
    {
        // A count well below Relayout's would mean the style sheet wasn't read, and nothing below compares anything
        expect(VARIANTS.filter(variant => variant.host.length === 1 && !variant.child.length).length).toBeGreaterThan(100);
    });
});

describe.each(PLACES)('rl-div in %s', place =>
{
    it.each(VARIANTS)('matches a div with $label', async variant =>
    {
        const found = await compare(variant, place);
        expect(found.length, `rl-div and the div differ:\n${found.join('\n')}`).toBe(0);
    });
});
