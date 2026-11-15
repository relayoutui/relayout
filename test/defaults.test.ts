import { afterEach, describe, expect, it } from 'vitest';
import '../dist/css/relayout.css';
import '../dist/js/relayout.js';
import { FORMS, layoutOf, mount, type Form, type Layout } from './stage.js';

// `--rl-padding-default` pads the four layouts, and `--rl-radius-default` rounds what has `rl-border`, as a class and
// as an element. A default must not undo what is already there: in the class form it is in a cascade layer, so a page's
// own padding or radius wins, whatever its weight and the load order, and `rl-padding-*` and `rl-radius-*` still beat it. The
// padding variable isn't defined until a page sets it, so a layout class keeps the padding its element has, such as the
// indent of a `ul` and the padding of a `button`.

const LAYOUTS: Layout[] = ['column', 'row', 'grid', 'frame'];
const added: HTMLStyleElement[] = [];

/** Adds a style sheet to the head: at its start, so relayout.css and everything after it come later, or at its end. */
function addStyle(css: string, where: 'before' | 'after'): void
{
    const style = document.createElement('style');
    style.textContent = css;
    if (where === 'before') document.head.prepend(style);
    else document.head.append(style);
    added.push(style);
}

afterEach(() =>
{
    for (const style of added.splice(0)) style.remove();
});

const paddingOf = (element: HTMLElement): string => getComputedStyle(element).paddingTop;

describe('--rl-padding-default', () =>
{
    describe.each(FORMS)('on a layout in the %s form', form =>
    {
        it.each(LAYOUTS)('has no padding on a %s until the variable is set', async layout =>
        {
            const { target, remove } = await mount(layoutOf(form, layout, [], '', 'Text'));
            expect(paddingOf(target)).toBe('0px');
            remove();
        });

        it.each(LAYOUTS)('pads a %s once the variable is set', async layout =>
        {
            addStyle(':root { --rl-padding-default: 10px; }', 'after');
            const { target, remove } = await mount(layoutOf(form, layout, [], '', 'Text'));
            expect(paddingOf(target)).toBe('10px');
            remove();
        });

        it.each(LAYOUTS)('is beaten by rl-padding-m on a %s', async layout =>
        {
            addStyle(':root { --rl-padding-default: 10px; }', 'after');
            const { target, remove } = await mount(layoutOf(form, layout, ['rl-padding-m'], '', 'Text'));
            expect(paddingOf(target)).toBe('8px');
            remove();
        });

        it.each(LAYOUTS)('is beaten by rl-padding-x-xl on a %s, which leaves the other axis to the default', async layout =>
        {
            addStyle(':root { --rl-padding-default: 10px; }', 'after');
            const { target, remove } = await mount(layoutOf(form, layout, ['rl-padding-x-xl'], '', 'Text'));
            expect([getComputedStyle(target).paddingLeft, paddingOf(target)]).toEqual(['24px', '10px']);
            remove();
        });
    });

    it.each(['rl-div', 'rl-divider'])('does not pad <%s>', async tag =>
    {
        addStyle(':root { --rl-padding-default: 10px; }', 'after');
        const { target, remove } = await mount(`<${tag}>Text</${tag}>`);
        expect(paddingOf(target)).toBe('0px');
        remove();
    });

    describe.each(['before', 'after'] as const)('with a page style sheet that comes %s relayout.css', where =>
    {
        it.each(LAYOUTS)('lets the page set the padding of a div with the class rl-%s', async layout =>
        {
            addStyle('.card { padding: 20px; }', where);
            const { target, remove } = await mount(layoutOf('class', layout, ['card'], '', 'Text'));
            expect(paddingOf(target)).toBe('20px');
            remove();
        });

        it.each(LAYOUTS)('lets the page set the padding of <rl-%s>', async layout =>
        {
            addStyle('.card { padding: 20px; }', where);
            const { target, remove } = await mount(layoutOf('element', layout, ['class="card"'], '', 'Text'));
            expect(paddingOf(target)).toBe('20px');
            remove();
        });

        it('lets the page set the padding even when the default is set', async () =>
        {
            addStyle(':root { --rl-padding-default: 10px; } .card { padding: 20px; }', where);
            const { target, remove } = await mount(layoutOf('class', 'column', ['card'], '', 'Text'));
            expect(paddingOf(target)).toBe('20px');
            remove();
        });
    });

    describe('on an element that has padding of its own', () =>
    {
        // The markup the docs recommend when the element carries the meaning: the classes on a list, a button, a form
        const OWN = [
            { name: 'a ul', html: (classes: string) => `<ul class="${classes}" data-target><li>Item</li></ul>`, side: 'paddingLeft' },
            { name: 'a button', html: (classes: string) => `<button class="${classes}" data-target>Button</button>`, side: 'paddingLeft' },
            { name: 'a fieldset', html: (classes: string) => `<fieldset class="${classes}" data-target>Fields</fieldset>`, side: 'paddingLeft' },
        ] as const;

        it.each(OWN)('keeps the padding of $name with a layout class, until the variable is set', async ({ html, side }) =>
        {
            const plain = await mount(html(''));
            const own = getComputedStyle(plain.target)[side];
            plain.remove();
            expect(own).not.toBe('0px');
            for (const layout of LAYOUTS)
            {
                const { target, remove } = await mount(html(`rl-${layout}`));
                expect(getComputedStyle(target)[side], `rl-${layout}`).toBe(own);
                remove();
            }
        });

        it.each(OWN)('pads $name with a layout class once the variable is set', async ({ html, side }) =>
        {
            addStyle(':root { --rl-padding-default: 10px; }', 'after');
            const { target, remove } = await mount(html('rl-column'));
            expect(getComputedStyle(target)[side]).toBe('10px');
            remove();
        });

        it.each(OWN)('is beaten by rl-padding-m on $name', async ({ html, side }) =>
        {
            const { target, remove } = await mount(html('rl-column rl-padding-m'));
            expect(getComputedStyle(target)[side]).toBe('8px');
            remove();
        });
    });

    // A reset has the weight of nothing, as the default has in the class form, so a default of the same weight would win
    // when it comes later. The default is in a cascade layer, so every rule of the page's own beats it.
    describe.each(['before', 'after'] as const)('with a reset in a style sheet that comes %s relayout.css', where =>
    {
        const RESETS = [
            { name: '* { padding: 0 }', css: '* { margin: 0; padding: 0; }' },
            { name: ':where(button, ul, fieldset) { padding: 0 }', css: ':where(button, ul, fieldset, div) { padding: 0; }' },
        ];
        const ELEMENTS = [
            { name: 'a ul', html: (classes: string) => `<ul class="${classes}" data-target><li>Item</li></ul>` },
            { name: 'a button', html: (classes: string) => `<button class="${classes}" data-target>Button</button>` },
            { name: 'a div', html: (classes: string) => `<div class="${classes}" data-target>Text</div>` },
        ];
        const CASES = RESETS.flatMap(reset => ELEMENTS.map(element => ({ reset, element })));

        it.each(CASES)('leaves $element.name with a layout class at the padding $reset.name gives it', async ({ reset, element }) =>
        {
            addStyle(reset.css, where);
            for (const layout of LAYOUTS)
            {
                const { target, remove } = await mount(element.html(`rl-${layout}`));
                expect(getComputedStyle(target).paddingLeft, `rl-${layout}`).toBe('0px');
                remove();
            }
        });

        it.each(CASES)('lets $reset.name win over the default on $element.name once the variable is set', async ({ reset, element }) =>
        {
            addStyle(`:root { --rl-padding-default: 10px; } ${reset.css}`, where);
            const { target, remove } = await mount(element.html('rl-column'));
            expect(getComputedStyle(target).paddingLeft).toBe('0px');
            remove();
        });
    });

    // What is not covered: a rule of the page's own that sits in a cascade layer declared before relayout.css is under the
    // default's layer. Recorded here so a change to it is noticed: until the variable is set the page's rule is what
    // revert-layer gives back, and once it is set the default beats it in the class form. An element's default is a :host
    // rule, which a rule of the page's own beats from any layer.
    describe('with a rule of the page in a cascade layer declared before relayout.css', () =>
    {
        const PAGE = '@layer page { .card { padding: 20px; } }';

        it('keeps the page\'s padding until the variable is set, in both forms', async () =>
        {
            addStyle(PAGE, 'before');
            for (const form of FORMS)
            {
                const { target, remove } = await mount(layoutOf(form, 'column', form === 'class' ? ['card'] : ['class="card"'], '', 'Text'));
                expect(paddingOf(target), form).toBe('20px');
                remove();
            }
        });

        it('lets the default beat the page\'s padding once the variable is set, in the class form', async () =>
        {
            addStyle(`${PAGE} :root { --rl-padding-default: 10px; }`, 'before');
            const { target, remove } = await mount(layoutOf('class', 'column', ['card'], '', 'Text'));
            expect(paddingOf(target)).toBe('10px');
            remove();
        });

        it('lets the page\'s padding win once the variable is set, in the element form', async () =>
        {
            addStyle(`${PAGE} :root { --rl-padding-default: 10px; }`, 'before');
            const { target, remove } = await mount(layoutOf('element', 'column', ['class="card"'], '', 'Text'));
            expect(paddingOf(target)).toBe('20px');
            remove();
        });
    });

    it('does not change the width of a layout, which is border-box', async () =>
    {
        addStyle(':root { --rl-padding-default: 10px; }', 'after');
        const { target, remove } = await mount(layoutOf('class', 'column', [], 'width: 200px;', 'Text'));
        expect(target.getBoundingClientRect().width).toBe(200);
        remove();
    });
});

/** A bordered div or element, in each form. */
function bordered(form: Form, flags: string[], pageClass = ''): string
{
    if (form === 'class') return `<div class="rl-border${flags.map(flag => ` ${flag}`).join('')}${pageClass ? ` ${pageClass}` : ''}">Text</div>`;
    return `<rl-div rl-border${flags.map(flag => ` ${flag}`).join('')}${pageClass ? ` class="${pageClass}"` : ''}>Text</rl-div>`;
}

const radiusOf = (element: HTMLElement): string => getComputedStyle(element).borderTopLeftRadius;

describe('--rl-radius-default', () =>
{
    describe.each(FORMS)('on rl-border in the %s form', form =>
    {
        it('is 0 until the variable is set', async () =>
        {
            const { target, remove } = await mount(bordered(form, []));
            expect(radiusOf(target)).toBe('0px');
            remove();
        });

        it('rounds the corners once the variable is set', async () =>
        {
            addStyle(':root { --rl-radius-default: 6px; }', 'after');
            const { target, remove } = await mount(bordered(form, []));
            expect(radiusOf(target)).toBe('6px');
            remove();
        });

        it('is beaten by rl-radius-m', async () =>
        {
            addStyle(':root { --rl-radius-default: 6px; }', 'after');
            const { target, remove } = await mount(bordered(form, ['rl-radius-m']));
            expect(radiusOf(target)).toBe('8px');
            remove();
        });
    });

    it('does not round an element that has no rl-border', async () =>
    {
        addStyle(':root { --rl-radius-default: 6px; }', 'after');
        const { target, remove } = await mount('<div class="rl-padding-m">Text</div>');
        expect(radiusOf(target)).toBe('0px');
        remove();
    });

    describe.each(['before', 'after'] as const)('with a page style sheet that comes %s relayout.css', where =>
    {
        it.each(FORMS)('lets the page round a bordered element in the %s form', async form =>
        {
            addStyle('.card { border-radius: 12px; }', where);
            const { target, remove } = await mount(bordered(form, [], 'card'));
            expect(radiusOf(target)).toBe('12px');
            remove();
        });

        it('lets the page round a bordered div even when the default is set', async () =>
        {
            addStyle(':root { --rl-radius-default: 6px; } .card { border-radius: 12px; }', where);
            const { target, remove } = await mount(bordered('class', [], 'card'));
            expect(radiusOf(target)).toBe('12px');
            remove();
        });
    });

    describe.each(['before', 'after'] as const)('with a rule of the page that comes %s relayout.css and has no specificity', where =>
    {
        it.each(FORMS)('lets `* { border-radius }` round a bordered element in the %s form', async form =>
        {
            addStyle('* { border-radius: 4px; }', where);
            const { target, remove } = await mount(bordered(form, []));
            expect(radiusOf(target)).toBe('4px');
            remove();
        });
    });

    it('keeps the border of rl-border', async () =>
    {
        const { target, remove } = await mount(bordered('class', []));
        expect(getComputedStyle(target).borderTopWidth).toBe('1px');
        remove();
    });
});
