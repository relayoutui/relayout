import { describe, expect, it } from 'vitest';
import '../dist/css/relayout.css';
import '../dist/js/relayout.js';
import { FORMS, layoutOf, mount, round, type Form, type Layout } from './stage.js';

// What a layout sets on a child, fill and the divider, and rl-scroll on a child, work in each form of the layout: a div with the class, an
// <rl-div> with it in the page, and an <rl-div> with it inside another component's shadow root. In the page the child
// can be a div or an <rl-div>, either way. Inside a shadow root it is an <rl-div>, as the docs say for every element
// with an rl- class there: a div gets what the layout sets on it, but not the rules of its own classes.

interface ChildForm
{
    name: string;
    /** The markup of a child with this utility, which is the class's name and the attribute's. */
    html: (utility: string, style?: string, inner?: string) => string;
}

const styleAttribute = (style?: string): string => style ? ` style="${style}"` : '';

const DIV: ChildForm = { name: 'a div with the class', html: (utility, style, inner = 'Fill') => `<div class="${utility}"${styleAttribute(style)} data-target>${inner}</div>` };
const RL_DIV: ChildForm = { name: 'an rl-div with the class', html: (utility, style, inner = 'Fill') => `<rl-div class="${utility}"${styleAttribute(style)} data-target>${inner}</rl-div>` };

/** The children a layout of the form takes: either kind in the page, and an <rl-div> in a shadow root. */
const childrenOf = (form: Form): ChildForm[] => form === 'shadow' ? [RL_DIV] : [DIV, RL_DIV];

const fixed = (height: number, width = 100): string => `<div data-fixed style="width: ${width}px; height: ${height}px;">Fixed</div>`;

/** Each form of the layout with each child it takes. */
const COMBINATIONS: { parent: Form; child: ChildForm }[] = FORMS.flatMap(parent => childrenOf(parent).map(child => ({ parent, child })));

const box = (element: HTMLElement): { left: number; top: number; width: number; height: number } =>
{
    const { left, top, width, height } = element.getBoundingClientRect();
    return { left: round(left), top: round(top), width: round(width), height: round(height) };
};

const mountLayout = (form: Form, layout: Layout, utilities: string[], style: string, inner: string, size: { width?: number } = {}) =>
    mount(layoutOf(form, layout, utilities, style, inner), { ...size, form });

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

        it('is border-box, so its padding is inside its size', async () =>
        {
            // A fill element that grows ends as wide in either box-sizing, so the box-sizing itself is what is read
            const { target, remove } = await mountLayout(parent, 'row', ['rl-nowrap'], '', fixed(20) + child.html('rl-width-fill', 'padding: 20px;'));
            expect(getComputedStyle(target).boxSizing).toBe('border-box');
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

        it('gets narrower than the minimum in a row that does not wrap', async () =>
        {
            const { target, remove } = await mountLayout(parent, 'row', ['rl-nowrap'], '', fixed(20, 150) + child.html('rl-width-fill'), { width: 300 });
            expect(box(target).width).toBe(150);
            remove();
        });
    });
});

// A fill child in a row that wraps is at least --rl-fill-min wide, 16rem (256px), or the row's width when that is less,
// so it moves to a line of its own before it gets narrower, rather than at its longest word.
describe('the minimum of rl-width-fill in a row that wraps', () =>
{
    describe.each(COMBINATIONS)('of the $parent form, with $child.name', ({ parent, child }) =>
    {
        /** Where the fill child is, beside a 150px element in a row of the width, with the row's own style. */
        async function placed(width: number, style = '', inner?: string): Promise<{ beside: boolean; width: number }>
        {
            const { target, all, remove } = await mountLayout(parent, 'row', [], style, fixed(20, 150) + child.html('rl-width-fill', undefined, inner), { width });
            const first = box(all('[data-fixed]')[0]);
            const found = box(target);
            remove();
            return { beside: found.top === first.top, width: found.width };
        }

        it('stays beside when the space left is at least 256px', async () =>
        {
            expect(await placed(420)).toEqual({ beside: true, width: 270 });
        });

        it('moves to its own line when the space left is less, and takes the whole line', async () =>
        {
            expect(await placed(400)).toEqual({ beside: false, width: 400 });
        });

        it('is as wide as the row on its own line when the row is narrower than the minimum', async () =>
        {
            expect(await placed(200)).toEqual({ beside: false, width: 200 });
        });

        it('follows --rl-fill-min set on the row', async () =>
        {
            expect(await placed(400, '--rl-fill-min: 10rem;')).toEqual({ beside: true, width: 250 });
        });

        it('stays beside at any width with --rl-fill-min: 0px', async () =>
        {
            expect(await placed(200, '--rl-fill-min: 0px;')).toEqual({ beside: true, width: 50 });
        });

        it('keeps content wider than the row inside it, so the content scrolls there and the page does not', async () =>
        {
            expect(await placed(400, '', '<div style="overflow: auto;"><div style="width: 2000px;">Code</div></div>')).toEqual({ beside: false, width: 400 });
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

        it('is border-box, so a padded element is no wider than the column', async () =>
        {
            const { target, remove } = await mountLayout(parent, 'column', [], '', child.html('rl-width-fill', 'padding: 20px;'));
            expect(getComputedStyle(target).boxSizing).toBe('border-box');
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

describe.each(['row', 'column', 'grid', 'frame'] as const)('rl-scroll on a child of a %s', layout =>
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

const DIVIDER_DIV: DividerChild = { name: 'a div with the class', html: '<div class="rl-divider" data-target></div>' };
const DIVIDER_HR: DividerChild = { name: 'an hr with the class', html: '<hr class="rl-divider" data-target>' };
const DIVIDER_RL_DIV: DividerChild = { name: 'an rl-div with the class', html: '<rl-div class="rl-divider" data-target></rl-div>' };

/** The dividers a layout of the form takes: any in the page, and an <rl-div> in a shadow root. */
const dividersOf = (form: Form): DividerChild[] => form === 'shadow' ? [DIVIDER_RL_DIV] : [DIVIDER_DIV, DIVIDER_HR, DIVIDER_RL_DIV];

describe('rl-divider', () =>
{
    describe.each(FORMS.flatMap(parent => dividersOf(parent).map(divider => ({ parent, divider }))))('in a layout of the $parent form, as $divider.name', ({ parent, divider }) =>
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
