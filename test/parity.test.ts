import { describe, expect, it } from 'vitest';
import '../dist/css/relayout.css';
import '../dist/js/relayout.js';

// Every rule of Relayout is written twice: as a class, in src/scss, and as styles of an element, in src/js. Both
// forms have to give the same result. For each attribute an element has a rule for, this puts the element and a div
// with the class of the same name side by side and compares what Chrome computes for them and for their children:
// every property, and the position and size of every box. The attributes are read from the elements' own styles, so
// a rule added to an element is compared without a change here.

type Form = 'class' | 'element';

// What a definition sits in. A layout is the same layout in each form, a div with its class and its element, and the
// divider needs one because it follows the layout it is a child of. With no tag it is a plain block.
interface Parent
{
    name: string;
    tag?: string;
    // the class of the layout. A plain div is the class form's counterpart of an element with no layout class.
    layoutClass?: string;
    style?: string;
}

interface Definition
{
    tag: string;
    // The class of the same layout. A plain div is the class form's counterpart of an element with no layout class.
    layout?: string;
    // Where it is compared
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

const BLOCK: Parent = { name: 'a block' };
const DEFINITIONS: Definition[] = [
    { tag: 'rl-column', layout: 'rl-column', parents: [BLOCK], hasChildren: true },
    { tag: 'rl-row', layout: 'rl-row', parents: [BLOCK], hasChildren: true },
    { tag: 'rl-grid', layout: 'rl-grid', parents: [BLOCK], hasChildren: true },
    { tag: 'rl-frame', layout: 'rl-frame', parents: [BLOCK], hasChildren: true },
    { tag: 'rl-div', parents: [BLOCK], hasChildren: true },
    {
        // A line across a column and a block, and down a row, whether the row has a height or not
        tag: 'rl-divider',
        layout: 'rl-divider',
        hasChildren: false,
        parents: [
            BLOCK,
            { name: 'an rl-column', tag: 'rl-column', layoutClass: 'rl-column' },
            { name: 'an rl-row', tag: 'rl-row', layoutClass: 'rl-row' },
            { name: 'an rl-row with a height', tag: 'rl-row', layoutClass: 'rl-row', style: 'height: 100px;' },
            { name: 'an rl-grid', tag: 'rl-grid', layoutClass: 'rl-grid' },
            { name: 'an rl-frame', tag: 'rl-frame', layoutClass: 'rl-frame' },
            // The class form's counterpart is a plain div, which is content-box until it has an `rl-` class, so both are set
            { name: 'an rl-div', tag: 'rl-div', style: 'box-sizing: border-box;' },
        ],
    },
];

// The browser gives a div `unicode-bidi: isolate` and an unknown element `normal`, and no rule of Relayout sets it
const IGNORED = new Set(['unicode-bidi']);
const STAGE = { width: 480, height: 240 };
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
        const onHost = host.length ? `[${host.join('][')}]` : '';
        const onChild = child.length ? `a child with [${child.join('][')}]` : '';
        const label = [onHost, onChild].filter(Boolean).join(' and ');
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

function build(definition: Definition, variant: Variant, parent: Parent, form: Form): { stage: HTMLElement; root: HTMLElement }
{
    const stage = document.createElement('div');
    stage.style.cssText = `position: absolute; left: 0; top: 0; width: ${STAGE.width}px; height: ${STAGE.height}px; `
        + 'font: 16px/20px sans-serif; display: block;';

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

    let root = host;
    if (parent.tag)
    {
        // Text on each side, so a row and a column have content and the divider has neighbors to separate
        const before = document.createElement('div');
        before.textContent = 'Before';
        const after = document.createElement('div');
        after.textContent = 'After';

        root = document.createElement(form === 'element' ? parent.tag : 'div');
        if (form === 'class' && parent.layoutClass) root.classList.add(parent.layoutClass);
        if (parent.style) root.style.cssText = parent.style;
        root.append(before, host, after);
    }

    stage.append(root);
    document.body.append(stage);
    return { stage, root };
}

/** The outer box, which is the element or its parent, and the children of it. */
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

/** Both forms in the same stage, measured once their images have loaded. */
async function compare(definition: Definition, variant: Variant, parent: Parent): Promise<string[]>
{
    const classForm = build(definition, variant, parent, 'class');
    const elementForm = build(definition, variant, parent, 'element');
    try
    {
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

for (const definition of DEFINITIONS)
{
    describe(definition.tag, () =>
    {
        const cases = variantsOf(definition).flatMap(variant => definition.parents.map(parent => ({ variant, parent })));

        it.each(cases)('matches its class with $variant.label in $parent.name', async ({ variant, parent }) =>
        {
            const found = await compare(definition, variant, parent);
            expect(found.length, `the element and the class differ:\n${found.join('\n')}`).toBe(0);
        });
    });
}
