import { afterEach, describe, expect, it } from 'vitest';
import '../dist/css/relayout.css';
import '../dist/js/relayout.js';
import { FORMS, layoutOf, mount, type Form, type Layout } from './stage.js';

// `--rl-padding-default` pads the four layouts, and `--rl-radius-default` rounds what has `rl-border`, as a class and
// as an element. A default of 0 is on every layout, so it must not undo what a page wrote: it has no specificity
// (`:where()` in the class form), so a page's own padding or radius wins whatever the load order, and `rl-padding-*`
// and `rl-radius-*` still beat it.

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
        it.each(LAYOUTS)('is 0 for a %s until the variable is set', async layout =>
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

    it('keeps the border of rl-border', async () =>
    {
        const { target, remove } = await mount(bordered('class', []));
        expect(getComputedStyle(target).borderTopWidth).toBe('1px');
        remove();
    });
});
