import { describe, expect, it } from 'vitest';
import '../dist/css/relayout.css';
import '../dist/js/relayout.js';
import { FORMS, layoutOf, mount, round, type Form, type Layout } from './stage.js';

// What a layout sets on a child, fill, scroll and the divider, works for a child of either form in a layout of either
// form: a div with the class, a div with the attribute, an <rl-div> with the attribute and an <rl-div> with the class.
// The Web components page says the two forms mix freely, and this is what that has to mean.

interface ChildForm
{
    name: string;
    /** The markup of a child with this utility, which is the class's name and the attribute's. */
    html: (utility: string, style?: string, inner?: string) => string;
}

const styleAttribute = (style?: string): string => style ? ` style="${style}"` : '';

const CHILDREN: ChildForm[] = [
    { name: 'a div with the class', html: (utility, style, inner = 'Fill') => `<div class="${utility}"${styleAttribute(style)} data-target>${inner}</div>` },
    { name: 'a div with the attribute', html: (utility, style, inner = 'Fill') => `<div ${utility}${styleAttribute(style)} data-target>${inner}</div>` },
    { name: 'an rl-div with the attribute', html: (utility, style, inner = 'Fill') => `<rl-div ${utility}${styleAttribute(style)} data-target>${inner}</rl-div>` },
    { name: 'an rl-div with the class', html: (utility, style, inner = 'Fill') => `<rl-div class="${utility}"${styleAttribute(style)} data-target>${inner}</rl-div>` },
];

const fixed = (height: number, width = 100): string => `<div data-fixed style="width: ${width}px; height: ${height}px;">Fixed</div>`;

/** Each parent form with each child form. */
const COMBINATIONS: { parent: Form; child: ChildForm }[] = FORMS.flatMap(parent => CHILDREN.map(child => ({ parent, child })));

const box = (element: HTMLElement): { left: number; top: number; width: number; height: number } =>
{
    const { left, top, width, height } = element.getBoundingClientRect();
    return { left: round(left), top: round(top), width: round(width), height: round(height) };
};

const mountLayout = (form: Form, layout: Layout, flags: string[], style: string, inner: string, size = {}) =>
    mount(layoutOf(form, layout, flags, style, inner), size);

describe('rl-width-fill in a row', () =>
{
    describe.each(COMBINATIONS)('of the $parent form, with $child.name', ({ parent, child }) =>
    {
        it('takes the width the other element leaves', async () =>
        {
            const { target, remove } = await mountLayout(parent, 'row', ['rl-nowrap'], '', fixed(20) + child.html('rl-width-fill'));
            expect(box(target).width).toBe(300);
            remove();
        });

        it('shares the width with another fill element', async () =>
        {
            const { all, remove } = await mountLayout(parent, 'row', ['rl-nowrap'], '', fixed(20) + child.html('rl-width-fill') + child.html('rl-width-fill'));
            expect(all('[data-target]').map(element => box(element).width)).toEqual([150, 150]);
            remove();
        });

        it('is border-box, so its padding is inside the width', async () =>
        {
            const { target, remove } = await mountLayout(parent, 'row', ['rl-nowrap'], '', fixed(20) + child.html('rl-width-fill', 'padding: 20px;'));
            expect(box(target).width).toBe(300);
            remove();
        });

        it('can get narrower than its content in a row that does not wrap', async () =>
        {
            const wide = child.html('rl-width-fill', undefined, '<div style="width: 500px;">Wide</div>');
            const { target, remove } = await mountLayout(parent, 'row', ['rl-nowrap'], '', fixed(20, 150) + wide);
            expect(box(target).width).toBe(250);
            remove();
        });

        it('wraps to its own line when it does not fit, at its longest word', async () =>
        {
            const word = child.html('rl-width-fill', undefined, '<div style="width: 120px;">Word</div>');
            const { target, all, remove } = await mountLayout(parent, 'row', [], '', fixed(20, 150) + word, { width: 200 });
            const first = box(all('[data-fixed]')[0]);
            expect(box(target).top).toBeGreaterThanOrEqual(first.top + first.height);
            expect(box(target).width).toBe(200);
            remove();
        });
    });
});

describe('rl-height-fill in a row', () =>
{
    describe.each(COMBINATIONS)('of the $parent form, with $child.name', ({ parent, child }) =>
    {
        it('stretches to the height of the row', async () =>
        {
            const { target, remove } = await mountLayout(parent, 'row', [], 'height: 100px;', child.html('rl-height-fill'));
            expect(box(target).height).toBe(100);
            remove();
        });

        it('stretches even when the row aligns its elements to the start', async () =>
        {
            const { target, remove } = await mountLayout(parent, 'row', ['rl-align-start'], 'height: 100px;', child.html('rl-height-fill'));
            expect(box(target).height).toBe(100);
            remove();
        });
    });
});

describe('rl-height-fill in a column', () =>
{
    describe.each(COMBINATIONS)('of the $parent form, with $child.name', ({ parent, child }) =>
    {
        it('takes the height the other elements leave', async () =>
        {
            const { target, remove } = await mountLayout(parent, 'column', [], 'height: 300px;', fixed(40) + child.html('rl-height-fill') + fixed(40));
            expect(box(target).height).toBe(220);
            remove();
        });

        it('can get shorter than its content, which then scrolls with rl-scroll', async () =>
        {
            const tall = child.html('rl-height-fill rl-scroll', undefined, '<div style="height: 500px;">Tall</div>');
            const { target, remove } = await mountLayout(parent, 'column', [], 'height: 200px;', fixed(40) + tall);
            expect(box(target).height).toBe(160);
            expect(target.scrollHeight).toBeGreaterThan(target.clientHeight);
            remove();
        });

        it('leaves the other elements at their height', async () =>
        {
            const { all, remove } = await mountLayout(parent, 'column', [], 'height: 100px;', fixed(60) + fixed(60));
            expect(all('[data-fixed]').map(element => box(element).height)).toEqual([60, 60]);
            remove();
        });
    });
});

describe('rl-width-fill in a column', () =>
{
    describe.each(COMBINATIONS)('of the $parent form, with $child.name', ({ parent, child }) =>
    {
        it('stretches across the column', async () =>
        {
            const { target, remove } = await mountLayout(parent, 'column', [], '', child.html('rl-width-fill'));
            expect(box(target).width).toBe(400);
            remove();
        });

        it('stretches across even when the column centers its elements', async () =>
        {
            const { target, remove } = await mountLayout(parent, 'column', ['rl-align-center'], '', child.html('rl-width-fill'));
            expect(box(target).width).toBe(400);
            remove();
        });
    });
});

describe.each(['row', 'column', 'frame'] as const)('rl-scroll on a child of a %s', layout =>
{
    describe.each(COMBINATIONS)('of the $parent form, with $child.name', ({ parent, child }) =>
    {
        it('scrolls', async () =>
        {
            const scroller = child.html('rl-scroll', 'height: 50px;', '<div style="height: 300px;">Tall</div>');
            const { target, remove } = await mountLayout(parent, layout, [], 'height: 200px;', scroller);
            const style = getComputedStyle(target);
            expect([style.overflowX, style.overflowY]).toEqual(['auto', 'auto']);
            expect(target.scrollHeight).toBeGreaterThan(target.clientHeight);
            remove();
        });

        it('is border-box', async () =>
        {
            const { target, remove } = await mountLayout(parent, layout, [], 'height: 200px;', child.html('rl-scroll', 'padding: 10px; width: 100px;'));
            expect(getComputedStyle(target).boxSizing).toBe('border-box');
            remove();
        });
    });
});

interface DividerChild
{
    name: string;
    html: string;
}

const DIVIDERS: DividerChild[] = [
    { name: 'a div with the class', html: '<div class="rl-divider" data-target></div>' },
    { name: 'an hr with the class', html: '<hr class="rl-divider" data-target>' },
    { name: 'an <rl-divider>', html: '<rl-divider data-target></rl-divider>' },
];

describe('rl-divider', () =>
{
    describe.each(FORMS.flatMap(parent => DIVIDERS.map(divider => ({ parent, divider }))))('in a layout of the $parent form, as $divider.name', ({ parent, divider }) =>
    {
        const between = `<div>Before</div>${divider.html}<div>After</div>`;

        it('is a line down in a row', async () =>
        {
            const { target, remove } = await mountLayout(parent, 'row', [], 'height: 100px;', between);
            expect(box(target)).toMatchObject({ width: 1, height: 100 });
            remove();
        });

        it('is a line down in a row that has no height', async () =>
        {
            const { target, remove } = await mountLayout(parent, 'row', [], '', between);
            expect(box(target).width).toBe(1);
            expect(box(target).height).toBeGreaterThan(1);
            remove();
        });

        it('is a line across in a column', async () =>
        {
            const { target, remove } = await mountLayout(parent, 'column', [], '', between);
            expect(box(target)).toMatchObject({ width: 400, height: 1 });
            remove();
        });

        it.each(['grid', 'frame'] as const)('is a line across in a %s', async layout =>
        {
            const { target, remove } = await mountLayout(parent, layout, [], 'width: 300px;', between);
            expect(box(target).height).toBe(1);
            expect(box(target).width).toBeGreaterThan(1);
            remove();
        });
    });
});
