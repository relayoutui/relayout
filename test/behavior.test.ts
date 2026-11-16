import { describe, expect, it } from 'vitest';
import '../dist/css/relayout.css';
import '../dist/js/relayout.js';
import { FORMS, PAGE_FORMS, boxOf, layoutOf, mount, round, type Form } from './stage.js';

// The behavior the docs describe, in each form: a div with the classes, an <rl-div> with them in the page, and an
// <rl-div> inside another component's shadow root. parity.test.ts proves that the forms give the same result, and
// children.test.ts that what a layout sets on a child works. A change to every form at once passes those, so this file
// checks the result itself: a row wraps, a fill grows, a grid fits its cells, and each step of each scale is the size
// the docs name.

const box = (element: HTMLElement): { left: number; top: number; width: number; height: number } =>
{
    const { left, top, width, height } = element.getBoundingClientRect();
    return { left: round(left), top: round(top), width: round(width), height: round(height) };
};

const block = (width: number, height = 20, attributes = ''): string => `<div ${attributes} style="width: ${width}px; height: ${height}px;"></div>`;

/** A utility on a plain box: a div or an <rl-div> with the class. */
function boxWith(form: Form, utility: string, style = '', inner = 'Text'): string
{
    return boxOf(form, utility, `${style ? `style="${style}" ` : ''}data-target`, inner);
}

describe.each(FORMS)('a row in the %s form', form =>
{
    const three = block(150) + block(150) + block(150);

    it('wraps its elements onto the next line when they do not fit', async () =>
    {
        const { all, remove } = await mount(layoutOf(form, 'row', [], '', three), { form });
        const [first, second, third] = all('div, rl-div').filter(element => element.style.width).map(box);
        expect(second.top).toBe(first.top);
        expect(third.top).toBeGreaterThan(first.top);
        remove();
    });

    it('keeps its elements on one line with rl-nowrap', async () =>
    {
        const { all, remove } = await mount(layoutOf(form, 'row', ['rl-nowrap'], '', three), { form });
        const tops = all('[style]').filter(element => element.style.width).map(element => box(element).top);
        expect(new Set(tops).size).toBe(1);
        remove();
    });

    it('wraps in reverse with rl-wrap-reverse, so a new line is above', async () =>
    {
        const { all, remove } = await mount(layoutOf(form, 'row', ['rl-wrap-reverse'], 'height: 100px;', three), { form });
        const [first, , third] = all('[style]').filter(element => element.style.width).map(box);
        expect(third.top).toBeLessThan(first.top);
        remove();
    });

    it('scrolls sideways with rl-nowrap-scroll, and keeps each element at its width', async () =>
    {
        const { target, all, remove } = await mount(layoutOf(form, 'row', ['rl-nowrap-scroll'], 'width: 120px;', block(300) + block(300)), { form });
        const style = getComputedStyle(target);
        expect([style.overflowX, style.overflowY]).toEqual(['auto', 'hidden']);
        expect(target.scrollWidth).toBeGreaterThan(target.clientWidth);
        expect(all('[style]').filter(element => element !== target).map(element => box(element).width)).toEqual([300, 300]);
        remove();
    });

    it.each([
        ['rl-justify-start', [0, 100]],
        ['rl-justify-center', [100, 200]],
        ['rl-justify-end', [200, 300]],
        ['rl-justify-between', [0, 300]],
    ] as const)('places two elements with %s at %j', async (utility, lefts) =>
    {
        const { all, remove } = await mount(layoutOf(form, 'row', [utility], '', block(100) + block(100)), { form });
        expect(all('[style]').filter(element => element.style.width === '100px').map(element => box(element).left)).toEqual(lefts);
        remove();
    });

    it.each([
        ['rl-align-start', 0, 20],
        ['rl-align-center', 40, 20],
        ['rl-align-end', 80, 20],
        ['rl-align-stretch', 0, 100],
    ] as const)('aligns an element with %s at %ipx from the top, %ipx high', async (utility, top, height) =>
    {
        const child = utility === 'rl-align-stretch' ? '<div data-target>Text</div>' : '<div data-target style="height: 20px;"></div>';
        const { target, remove } = await mount(layoutOf(form, 'row', [utility], 'height: 100px;', child), { form });
        expect([box(target).top, box(target).height]).toEqual([top, height]);
        remove();
    });
});

describe.each(FORMS)('a column in the %s form', form =>
{
    it('stacks its elements one under another', async () =>
    {
        const { all, remove } = await mount(layoutOf(form, 'column', [], '', block(100, 30) + block(100, 30)), { form });
        expect(all('[style]').filter(element => element.style.width === '100px').map(element => box(element).top)).toEqual([0, 30]);
        remove();
    });

    it('stretches its elements across by default', async () =>
    {
        const { target, remove } = await mount(layoutOf(form, 'column', [], '', '<div data-target>Text</div>'), { form });
        expect(box(target).width).toBe(400);
        remove();
    });

    it.each([
        ['rl-align-start', 0],
        ['rl-align-center', 150],
        ['rl-align-end', 300],
        ['rl-align-stretch', 0],
    ] as const)('places an element 100px wide with %s at %ipx from the left', async (utility, left) =>
    {
        const { target, remove } = await mount(layoutOf(form, 'column', [utility], '', '<div data-target style="width: 100px;">Text</div>'), { form });
        expect(box(target).left).toBe(left);
        remove();
    });

    it('centers its text with rl-align-center', async () =>
    {
        const { target, remove } = await mount(layoutOf(form, 'column', ['rl-align-center'], '', '<div data-target>Text</div>'), { form });
        expect(getComputedStyle(target.parentElement!).textAlign).toBe('center');
        remove();
    });

    // The align's text alignment is a default, so a class that names the text wins over it. The child fills the width,
    // so where its word sits shows the alignment.
    it.each([
        ['rl-align-center', 'rl-text-start', 'start', 0],
        ['rl-align-center', 'rl-text-end', 'end', 368],
        ['rl-align-end', 'rl-text-center', 'center', 184],
    ] as const)('lets %s on a column take %s, which aligns the text at the %s', async (align, text, value, left) =>
    {
        const inner = '<div class="rl-width-fill"><span data-word style="display: inline-block; width: 32px;">Text</span></div>';
        const { target, all, remove } = await mount(layoutOf(form, 'column', [align, text], '', inner), { form });
        expect(getComputedStyle(target).textAlign).toBe(value);
        expect(box(all('[data-word]')[0]).left).toBe(left);
        remove();
    });

    it.each([
        ['rl-justify-start', [0, 30]],
        ['rl-justify-center', [70, 100]],
        ['rl-justify-end', [140, 170]],
        ['rl-justify-between', [0, 170]],
    ] as const)('places two elements 30px high in a column 200px high with %s at %j', async (utility, tops) =>
    {
        const { all, remove } = await mount(layoutOf(form, 'column', [utility], 'height: 200px;', block(100, 30) + block(100, 30)), { form });
        expect(all('[style]').filter(element => element.style.width === '100px').map(element => box(element).top)).toEqual(tops);
        remove();
    });
});

describe.each(FORMS)('a grid in the %s form', form =>
{
    const cells = (count: number): string => Array.from({ length: count }, () => '<div style="height: 20px;"></div>').join('');
    const columnsOf = (all: (selector: string) => HTMLElement[]): number => new Set(all('[style]').filter(element => element.style.height === '20px').map(element => box(element).left)).size;

    it('has as many cells on a line as the width fits, from a minimum of 100px', async () =>
    {
        const { all, remove } = await mount(layoutOf(form, 'grid', [], '', cells(8)), { width: 480, form });
        expect(columnsOf(all)).toBe(4);
        remove();
    });

    it('shares the width the cells leave', async () =>
    {
        const { all, remove } = await mount(layoutOf(form, 'grid', [], '', cells(4)), { width: 480, form });
        expect(all('[style]').filter(element => element.style.height === '20px').map(element => box(element).width)).toEqual([120, 120, 120, 120]);
        remove();
    });

    it('widens the cells in use with fit, and keeps room for the empty ones with fill', async () =>
    {
        const fit = await mount(layoutOf(form, 'grid', ['rl-grid-fit-s'], '', cells(2)), { width: 480, form });
        const fill = await mount(layoutOf(form, 'grid', ['rl-grid-fill-s'], '', cells(2)), { width: 480, form });
        const widthOf = (all: (selector: string) => HTMLElement[]): number[] => all('[style]').filter(element => element.style.height === '20px').map(element => box(element).width);
        expect(widthOf(fit.all)).toEqual([240, 240]);
        expect(widthOf(fill.all)).toEqual([120, 120]);
        fit.remove();
        fill.remove();
    });

    // A grid has one set of columns for all its lines, and the cells share the width, so there is no room to place them in
    it.each(['rl-justify-center', 'rl-justify-end'])('leaves the cells where they were with %s', async utility =>
    {
        const lefts = async (utilities: string[]): Promise<number[]> =>
        {
            const { all, remove } = await mount(layoutOf(form, 'grid', utilities, '', cells(5)), { width: 500, form });
            const found = all('[style]').filter(element => element.style.height === '20px').map(element => box(element).left);
            remove();
            return found;
        };
        expect(await lefts([utility])).toEqual(await lefts([]));
    });

    it('is never narrower than one cell is wide: a grid narrower than a cell has one column as wide as the grid', async () =>
    {
        const { all, remove } = await mount(layoutOf(form, 'grid', ['rl-grid-fit-2xl'], 'width: 120px;', cells(3)), { width: 480, form });
        expect(all('[style]').filter(element => element.style.height === '20px').map(element => box(element).width)).toEqual([120, 120, 120]);
        remove();
    });
});

describe.each(FORMS)('a frame in the %s form', form =>
{
    it('centers one element in the width and the height of its parent', async () =>
    {
        const { target, remove } = await mount(layoutOf(form, 'frame', [], '', '<div data-target style="width: 100px; height: 50px;"></div>'), { width: 480, height: 240, form });
        expect(box(target)).toMatchObject({ left: 190, top: 95, width: 100, height: 50 });
        remove();
    });

    it('keeps an element that is too big inside, without scrolling it', async () =>
    {
        const { target, remove } = await mount(layoutOf(form, 'frame', [], '', '<div data-target style="width: 1000px; height: 1000px;"></div>'), { width: 480, height: 240, form });
        expect(box(target)).toMatchObject({ width: 480, height: 240 });
        expect(getComputedStyle(target).overflowY).toBe('visible');
        remove();
    });

    it('fits an image in the frame, with its proportions', async () =>
    {
        const source = 'data:image/svg+xml,' + encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" width="600" height="300"/>');
        const { target, remove } = await mount(layoutOf(form, 'frame', [], '', `<img data-target src="${source}">`), { width: 480, height: 240, form });
        await (target as HTMLImageElement).decode();
        expect(getComputedStyle(target).objectFit).toBe('contain');
        expect(box(target).width / box(target).height).toBeCloseTo(2, 1);
        expect(box(target).width).toBeLessThanOrEqual(480);
        remove();
    });
});

describe.each(FORMS)('rl-width-* and rl-center-self in the %s form', form =>
{
    it('limits an element to the width, and fills the parent below it', async () =>
    {
        const wide = await mount(boxWith(form, 'rl-width-s'), { width: 600, form });
        const narrow = await mount(boxWith(form, 'rl-width-s'), { width: 300, form });
        expect(box(wide.target).width).toBe(480);
        expect(box(narrow.target).width).toBe(300);
        wide.remove();
        narrow.remove();
    });

    it('does not center on its own', async () =>
    {
        const { target, remove } = await mount(boxWith(form, 'rl-width-s'), { width: 600, form });
        expect(box(target).left).toBe(0);
        remove();
    });

    it('centers with rl-center-self', async () =>
    {
        const { target, remove } = await mount(boxWith(form, 'rl-width-s rl-center-self'), { width: 600, form });
        expect(box(target).left).toBe(60);
        remove();
    });

    it('makes an element as tall as its parent with rl-height-full', async () =>
    {
        const { target, remove } = await mount(`<div style="height: 200px;">${boxWith(form, 'rl-height-full')}</div>`, { form });
        expect(box(target).height).toBe(200);
        remove();
    });
});

// The scales. Each step is a size the docs name, so each is checked against its number, and a change to one is noticed.

const SPACE: [string, number][] = [['0', 0], ['xs', 2], ['s', 4], ['m', 8], ['l', 16], ['xl', 24], ['2xl', 36]];
const WIDTH: [string, number][] = [['xs', 320], ['s', 480], ['m', 640], ['l', 768], ['xl', 1024], ['2xl', 1280]];
const GRID: [string, number][] = [['xs', 50], ['s', 100], ['m', 150], ['l', 200], ['xl', 250], ['2xl', 320]];
const TEXT: [string, number][] = [['xs', 10], ['s', 12], ['m', 14], ['l', 16], ['xl', 24], ['2xl', 36]];

describe.each(FORMS)('the spacing scale in the %s form', form =>
{
    it.each(SPACE)('rl-gap-%s is %ipx', async (size, pixels) =>
    {
        const { target, remove } = await mount(layoutOf(form, 'column', [`rl-gap-${size}`], '', '<div>One</div><div>Two</div>'), { form });
        expect([getComputedStyle(target).rowGap, getComputedStyle(target).columnGap]).toEqual([`${pixels}px`, `${pixels}px`]);
        remove();
    });

    it.each(SPACE)('rl-padding-%s is %ipx on every side', async (size, pixels) =>
    {
        const { target, remove } = await mount(boxWith(form, `rl-padding-${size}`), { form });
        const style = getComputedStyle(target);
        expect([style.paddingTop, style.paddingRight, style.paddingBottom, style.paddingLeft]).toEqual(Array(4).fill(`${pixels}px`));
        remove();
    });

    it.each(SPACE)('rl-padding-x-%s is %ipx on the sides, and rl-padding-y-%s the same above and below', async (size, pixels) =>
    {
        const across = await mount(boxWith(form, `rl-padding-x-${size}`), { form });
        const down = await mount(boxWith(form, `rl-padding-y-${size}`), { form });
        const x = getComputedStyle(across.target);
        const y = getComputedStyle(down.target);
        expect([x.paddingLeft, x.paddingRight, x.paddingTop, x.paddingBottom]).toEqual([`${pixels}px`, `${pixels}px`, '0px', '0px']);
        expect([y.paddingTop, y.paddingBottom, y.paddingLeft, y.paddingRight]).toEqual([`${pixels}px`, `${pixels}px`, '0px', '0px']);
        across.remove();
        down.remove();
    });

    it.each(SPACE)('rl-radius-%s is %ipx', async (size, pixels) =>
    {
        const { target, remove } = await mount(boxWith(form, `rl-radius-${size}`), { form });
        expect(getComputedStyle(target).borderTopLeftRadius).toBe(`${pixels}px`);
        remove();
    });
});

describe.each(FORMS)('the width scale in the %s form', form =>
{
    it.each(WIDTH)('rl-width-%s is %ipx wide in a parent that is wider', async (size, pixels) =>
    {
        const { target, remove } = await mount(boxWith(form, `rl-width-${size}`), { width: 1400, form });
        expect(box(target).width).toBe(pixels);
        remove();
    });
});

describe.each(FORMS)('the grid scale in the %s form', form =>
{
    const cells = Array.from({ length: 6 }, () => '<div style="height: 20px;"></div>').join('');
    const columnsOf = (all: (selector: string) => HTMLElement[]): number => new Set(all('[style]').filter(element => element.style.height === '20px').map(element => box(element).left)).size;

    describe.each(['fit', 'fill'])('rl-grid-%s-*', kind =>
    {
        it.each(GRID)('%s: a cell is at least %ipx wide', async (size, pixels) =>
        {
            // Three minimums fit in a grid three minimums wide, and only two in a grid a pixel narrower
            const exact = await mount(layoutOf(form, 'grid', [`rl-grid-${kind}-${size}`], `width: ${pixels * 3}px;`, cells), { width: 1000, form });
            const narrower = await mount(layoutOf(form, 'grid', [`rl-grid-${kind}-${size}`], `width: ${pixels * 3 - 1}px;`, cells), { width: 1000, form });
            expect(columnsOf(exact.all)).toBe(3);
            expect(columnsOf(narrower.all)).toBe(2);
            exact.remove();
            narrower.remove();
        });
    });
});

describe.each(FORMS)('the text scale in the %s form', form =>
{
    it.each(TEXT)('rl-text-%s is %ipx', async (size, pixels) =>
    {
        const { target, remove } = await mount(boxWith(form, `rl-text-${size}`), { form });
        expect(getComputedStyle(target).fontSize).toBe(`${pixels}px`);
        remove();
    });

    it.each([['tight', 20], ['normal', 24], ['loose', 32]] as [string, number][])('rl-textline-%s is a line height of %ipx in 16px text', async (name, pixels) =>
    {
        const { target, remove } = await mount(boxWith(form, `rl-textline-${name}`), { form });
        expect(getComputedStyle(target).lineHeight).toBe(`${pixels}px`);
        remove();
    });

    it.each([['bold', '700'], ['medium', '500'], ['regular', '400']])('rl-font-%s is a weight of %s', async (name, weight) =>
    {
        const { target, remove } = await mount(boxWith(form, `rl-font-${name}`), { form });
        expect(getComputedStyle(target).fontWeight).toBe(weight);
        remove();
    });
});

describe.each(PAGE_FORMS)('a centered column in the %s form', form =>
{
    it('takes the text alignment of a rule of the page that weighs less than its own', async () =>
    {
        // An attribute selector weighs as much as one class, and the column's rule for its text has two
        const style = '<style>[data-page-text] { text-align: end; }</style>';
        const { target, remove } = await mount(style + boxOf(form, 'rl-column rl-align-center', 'data-page-text', '<div>Text</div>'), { form });
        expect(getComputedStyle(target).textAlign).toBe('end');
        remove();
    });
});

describe.each(FORMS)('rl-text-start and rl-text-end in the %s form', form =>
{
    /** The left edge of a word 32px wide, in a box 400px wide that reads in the direction. */
    async function leftOf(utility: string, direction: 'ltr' | 'rtl'): Promise<number>
    {
        const { all, remove } = await mount(boxOf(form, utility, `dir="${direction}"`, '<span data-word style="display: inline-block; width: 32px;">Text</span>'), { form });
        const left = box(all('[data-word]')[0]).left;
        remove();
        return left;
    }

    it.each([
        ['rl-text-start', 'ltr', 0],
        ['rl-text-start', 'rtl', 368],
        ['rl-text-end', 'ltr', 368],
        ['rl-text-end', 'rtl', 0],
    ] as const)('%s in a box that reads %s puts the text at %ipx from the left', async (utility, direction, left) =>
    {
        expect(await leftOf(utility, direction)).toBe(left);
    });

    // The names before 0.8.0 named sides, where the rest follows the reading direction
    it.each(['rl-text-left', 'rl-text-right'])('%s does nothing', async utility =>
    {
        const { target, remove } = await mount(`<div style="text-align: center;">${boxOf(form, utility, 'data-target', 'Text')}</div>`, { form });
        expect(getComputedStyle(target).textAlign).toBe('center');
        remove();
    });
});

describe.each(FORMS)('rl-height-screen and rl-height-screen-min in the %s form', form =>
{
    const tall = '<div style="height: 3000px;"></div>';

    it('makes an element as tall as the window with rl-height-screen, whatever its content', async () =>
    {
        const { target, remove } = await mount(boxWith(form, 'rl-height-screen', '', tall), { form });
        expect(box(target).height).toBe(innerHeight);
        remove();
    });

    it('makes an element at least as tall as the window with rl-height-screen-min', async () =>
    {
        const { target, remove } = await mount(boxWith(form, 'rl-height-screen-min'), { form });
        expect(box(target).height).toBe(innerHeight);
        remove();
    });

    it('lets an element with rl-height-screen-min grow with its content', async () =>
    {
        const { target, remove } = await mount(boxWith(form, 'rl-height-screen-min', '', tall), { form });
        expect(box(target).height).toBe(3000);
        remove();
    });
});

describe.each(FORMS)('rl-gap-wrap-* in the %s form', form =>
{
    const gaps = (element: HTMLElement): string[] => [getComputedStyle(element).columnGap, getComputedStyle(element).rowGap];

    it.each(SPACE)('rl-gap-wrap-%s is %ipx between the lines of a row, beside rl-gap-l between its elements', async (size, pixels) =>
    {
        const { target, remove } = await mount(layoutOf(form, 'row', ['rl-gap-l', `rl-gap-wrap-${size}`], '', '<div>One</div>'), { form });
        expect(gaps(target)).toEqual(['16px', `${pixels}px`]);
        remove();
    });

    it('puts the next line of a row that far below, and keeps the gap between elements', async () =>
    {
        // Two blocks of 150px fit on a line 400px wide with a gap of 16px, and a third goes to the next line
        const blocks = block(150) + block(150) + block(150);
        const { all, remove } = await mount(layoutOf(form, 'row', ['rl-gap-l', 'rl-gap-wrap-xs'], '', blocks), { form });
        const boxes = all('[style]').filter(element => element.style.width === '150px').map(box);
        expect(boxes.map(found => [found.left, found.top])).toEqual([[0, 0], [166, 0], [0, 22]]);
        remove();
    });

    it('sets the gap between the rows of a grid', async () =>
    {
        const { target, remove } = await mount(layoutOf(form, 'grid', ['rl-gap-l', 'rl-gap-wrap-xs'], '', '<div>One</div>'), { form });
        expect(gaps(target)).toEqual(['16px', '2px']);
        remove();
    });

    it('does nothing in a column, whose lines are its elements', async () =>
    {
        const { target, remove } = await mount(layoutOf(form, 'column', ['rl-gap-l', 'rl-gap-wrap-xs'], '', '<div>One</div>'), { form });
        expect(gaps(target)).toEqual(['16px', '16px']);
        remove();
    });
});

describe.each(FORMS)('rl-align-baseline in the %s form', form =>
{
    // An inline box with no content sits on the baseline of its line, so its top is where the baseline is
    const text = (size: number): string => `<div style="font-size: ${size}px; line-height: normal;">Text<span data-baseline style="display: inline-block;"></span></div>`;
    const baselines = (all: (selector: string) => HTMLElement[]): number[] => all('[data-baseline]').map(element => box(element).top);

    it.each(['row', 'grid'] as const)('puts text of two sizes on one baseline in a %s', async layout =>
    {
        const { all, remove } = await mount(layoutOf(form, layout, ['rl-align-baseline'], '', text(36) + text(12)), { form });
        const [large, small] = baselines(all);
        expect(small).toBeCloseTo(large, 0);
        remove();
    });

    it('differs from rl-align-start, which lines up the tops of the elements', async () =>
    {
        const { all, remove } = await mount(layoutOf(form, 'row', ['rl-align-start'], '', text(36) + text(12)), { form });
        const [large, small] = baselines(all);
        expect(large - small).toBeGreaterThan(10);
        remove();
    });

    it('places as rl-align-start does in a column: at the start, only as wide as its content', async () =>
    {
        // The column's default, stretch, would make the element as wide as the column, 400px
        const placed = async (align: string): Promise<{ left: number; width: number }> =>
        {
            const { target, remove } = await mount(layoutOf(form, 'column', [align], '', '<div data-target>Text</div>'), { form });
            const { left, width } = box(target);
            remove();
            return { left, width };
        };
        const baseline = await placed('rl-align-baseline');
        expect(baseline).toEqual(await placed('rl-align-start'));
        expect(baseline.left).toBe(0);
        expect(baseline.width).toBeLessThan(400);
    });
});

describe.each(FORMS)('rl-sticky-top in the %s form', form =>
{
    // A box that scrolls, with a header that sticks, and below it a card with a position of its own, as a card with a
    // badge has. The box is scrolled 50px down.
    async function scrolled(): Promise<{ scroller: HTMLElement; header: HTMLElement; remove: () => void }>
    {
        const header = boxOf(form, 'rl-sticky-top', 'data-header style="height: 20px; background: white;"', 'Header');
        const card = '<div style="position: relative; height: 300px; background: gray;">Card</div>';
        const { target, all, remove } = await mount(boxOf(form, 'rl-scroll', 'style="height: 100px;"', header + card), { form });
        target.scrollTop = 50;
        return { scroller: target, header: all('[data-header]')[0], remove };
    }

    it('stays at the top of the box that scrolls', async () =>
    {
        const { scroller, header, remove } = await scrolled();
        expect(box(header).top).toBe(box(scroller).top);
        remove();
    });

    it('keeps a card with position: relative under it as the box scrolls', async () =>
    {
        const { header, remove } = await scrolled();
        const { left, top, width, height } = box(header);
        const root = header.getRootNode() as Document | ShadowRoot;
        expect(root.elementFromPoint(left + width / 2, top + height / 2)).toBe(header);
        remove();
    });

    it('is sticky at the top, with a z-index of 1', async () =>
    {
        const { header, remove } = await scrolled();
        const style = getComputedStyle(header);
        expect([style.position, style.top, style.zIndex]).toEqual(['sticky', '0px', '1']);
        remove();
    });
});

describe.each(FORMS)('the side borders in the %s form', form =>
{
    const SIDES = ['top', 'right', 'bottom', 'left'] as const;

    it.each([
        ['rl-border-top', 'ltr', 'top'],
        ['rl-border-bottom', 'ltr', 'bottom'],
        ['rl-border-start', 'ltr', 'left'],
        ['rl-border-end', 'ltr', 'right'],
        ['rl-border-start', 'rtl', 'right'],
        ['rl-border-end', 'rtl', 'left'],
    ] as const)('%s on a box that reads %s draws a border on the %s only', async (utility, direction, side) =>
    {
        const { target, remove } = await mount(boxOf(form, utility, `dir="${direction}" data-target`, 'Text'), { form });
        const style = getComputedStyle(target);
        const widths = SIDES.map(name => style.getPropertyValue(`border-${name}-width`));
        expect(widths).toEqual(SIDES.map(name => name === side ? '1px' : '0px'));
        expect(style.getPropertyValue(`border-${side}-style`)).toBe('solid');
        remove();
    });

    it('has no radius, even where --rl-radius-default is set', async () =>
    {
        const { target, remove } = await mount(boxOf(form, 'rl-border-bottom', 'data-target style="--rl-radius-default: 8px;"', 'Text'), { form });
        expect(getComputedStyle(target).borderBottomLeftRadius).toBe('0px');
        remove();
    });
});

describe.each(FORMS)('rl-radius-full in the %s form', form =>
{
    it('rounds the corners by 9999px, which makes round ends at any size', async () =>
    {
        const { target, remove } = await mount(boxWith(form, 'rl-radius-full', 'width: 300px; height: 100px;'), { form });
        expect(getComputedStyle(target).borderTopLeftRadius).toBe('9999px');
        remove();
    });
});
