import { describe, expect, it } from 'vitest';
import '../dist/css/relayout.css';
import '../dist/js/relayout.js';

// Every rule of Relayout is written twice: as a class, in src/scss, and as styles of an element, in src/js. Both
// forms have to give the same result. For each attribute an element has a rule for, this puts the element and a div
// with the class of the same name side by side and compares what Chrome computes for them and for their children:
// every property, and the position and size of every box. The attributes are read from the elements' own styles, so
// a rule added to an element is compared without a change here.

type Form = 'class' | 'element';
type Parent = 'block' | 'row' | 'column';

interface Definition
{
    tag: string;
    // The class of the same layout. A plain div is the class form's counterpart of an element with no layout class.
    layout?: string;
    // Where it is compared: the box a layout is placed in decides how it sizes and stretches
    parents: Parent[];
    // false for a leaf, such as a divider
    hasChildren: boolean;
}

interface Variant
{
    // attributes on the element, classes on the div
    host: string[];
    // the same on the first child, for the rules a layout sets on its children
    child: string[];
    label: string;
}

interface Box
{
    box: string;
    properties: Record<string, string>;
}

const DEFINITIONS: Definition[] = [
    { tag: 'rl-column', layout: 'rl-column', parents: ['block'], hasChildren: true },
    { tag: 'rl-row', layout: 'rl-row', parents: ['block'], hasChildren: true },
    { tag: 'rl-grid', layout: 'rl-grid', parents: ['block'], hasChildren: true },
    { tag: 'rl-frame', layout: 'rl-frame', parents: ['block'], hasChildren: true },
    { tag: 'rl-div', parents: ['block'], hasChildren: true },
    { tag: 'rl-divider', layout: 'rl-divider', parents: ['row', 'column'], hasChildren: false },
];

// The browser gives a div `unicode-bidi: isolate` and an unknown element `normal`, and no rule of Relayout sets it
const IGNORED = new Set(['unicode-bidi']);
const STAGE = { width: 480, height: 240 };
const PARENTS: Record<Parent, string> = {
    block: 'display: block;',
    row: 'display: flex; flex-direction: row;',
    column: 'display: flex; flex-direction: column;',
};
const IMAGE = 'data:image/svg+xml,' + encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" width="600" height="300"/>');
const HOST_ATTRIBUTE = /:host\(\[([^\]=\s]+)\]\)/g;
const SLOTTED_ATTRIBUTE = /::slotted\(\[([^\]=\s]+)\]\)/g;

/** The selectors of an element's own styles. */
function selectorsOf(tag: string): string[]
{
    const { styles } = customElements.get(tag) as unknown as { styles: unknown };
    const sheet = new CSSStyleSheet();
    sheet.replaceSync([styles].flat(Infinity).map(style => (style as { cssText: string }).cssText).join('\n'));
    return [...sheet.cssRules]
        .filter((rule): rule is CSSStyleRule => rule instanceof CSSStyleRule)
        .map(rule => rule.selectorText);
}

function attributesIn(pattern: RegExp, selector: string): string[]
{
    return [...selector.matchAll(pattern)].map(match => match[1]);
}

/**
 * One variant for each combination of host and child attributes the element has a rule for, and the element with
 * none, unless its class form is a plain div: a div has no `rl-` class, and without one it isn't border-box.
 */
function variantsOf(definition: Definition): Variant[]
{
    const variants = new Map<string, Variant>();
    if (definition.layout) variants.set('', { host: [], child: [], label: 'no attribute' });
    for (const selector of selectorsOf(definition.tag))
    {
        const host = attributesIn(HOST_ATTRIBUTE, selector);
        const child = attributesIn(SLOTTED_ATTRIBUTE, selector);
        if (!host.length && !child.length) continue;
        const label = [host.length ? `[${host.join('][')}]` : '', child.length ? ` > [${child.join('][')}]` : ''].join('');
        variants.set(label, { host, child, label });
    }
    return [...variants.values()];
}

/** Marks an element with the attributes, or a div with the classes of the same names. */
function mark(element: HTMLElement, names: string[], form: Form): void
{
    if (form === 'element') names.forEach(name => element.setAttribute(name, ''));
    else element.classList.add(...names);
}

function build(definition: Definition, variant: Variant, parent: Parent, form: Form): { stage: HTMLElement; host: HTMLElement }
{
    const stage = document.createElement('div');
    stage.style.cssText = `position: absolute; left: 0; top: 0; width: ${STAGE.width}px; height: ${STAGE.height}px; `
        + `font: 16px/20px sans-serif; ${PARENTS[parent]}`;

    const host = document.createElement(form === 'element' ? definition.tag : 'div');
    mark(host, definition.layout && form === 'class' ? [definition.layout, ...variant.host] : variant.host, form);

    if (definition.hasChildren)
    {
        const short = document.createElement('div');
        short.textContent = 'Short';
        mark(short, variant.child, form);

        const long = document.createElement('div');
        long.textContent = 'A longer text that wraps when the space runs out, and a few more words to make it take three lines.';

        const image = document.createElement('img');
        image.src = IMAGE;

        host.append(short, long, image);
    }

    stage.append(host);
    document.body.append(stage);
    return { stage, host };
}

function measure(stage: HTMLElement, host: HTMLElement): Box[]
{
    const origin = stage.getBoundingClientRect();
    return [host, ...host.children].map(element =>
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
        const name = index === 0 ? 'host' : `child ${index}`;
        const lines = Object.keys({ ...expected.properties, ...actual.properties })
            .filter(property => !IGNORED.has(property) && expected.properties[property] !== actual.properties[property])
            .map(property => `${name} ${property}: class ${expected.properties[property]}, element ${actual.properties[property]}`);
        if (expected.box !== actual.box) lines.push(`${name} box (x y width height): class ${expected.box}, element ${actual.box}`);
        return lines;
    });
}

/** Both forms in the same stage, measured once their images have loaded. */
async function compare(definition: Definition, variant: Variant, parent: Parent): Promise<string[]>
{
    const classForm = build(definition, variant, parent, 'class');
    const elementForm = build(definition, variant, parent, 'element');
    try
    {
        const images = [...classForm.host.querySelectorAll('img'), ...elementForm.host.querySelectorAll('img')];
        await Promise.all(images.map(image => image.decode()));
        return differences(measure(classForm.stage, classForm.host), measure(elementForm.stage, elementForm.host));
    }
    finally
    {
        classForm.stage.remove();
        elementForm.stage.remove();
    }
}

for (const definition of DEFINITIONS)
{
    describe(definition.tag, () =>
    {
        const cases = variantsOf(definition).flatMap(variant => definition.parents.map(parent => ({ variant, parent })));

        it.each(cases)('$variant.label in a $parent', async ({ variant, parent }) =>
        {
            const found = await compare(definition, variant, parent);
            expect(found.length, `the element and the class differ:\n${found.join('\n')}`).toBe(0);
        });
    });
}
