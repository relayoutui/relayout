import { describe, expect, it } from 'vitest';
import '../dist/css/relayout.css';
import '../dist/js/relayout.js';
import { FORMS, layoutOf, mount, round, type Form } from './stage.js';

// The behavior the docs describe, in each form. parity.test.ts proves that a class and its element give the same
// result, and children.test.ts that a child of either form works in a layout of either form. A change to both forms at
// once passes those, so this file checks the result itself: a row wraps, a fill grows, a grid fits its cells, and each
// step of each scale is the size the docs name.

const box = (element: HTMLElement): { left: number; top: number; width: number; height: number } =>
{
    const { left, top, width, height } = element.getBoundingClientRect();
    return { left: round(left), top: round(top), width: round(width), height: round(height) };
};

const block = (width: number, height = 20, attributes = ''): string => `<div ${attributes} style="width: ${width}px; height: ${height}px;"></div>`;

/** A utility on a plain box: a div with the class, or an <rl-div> with the attribute. */
function boxWith(form: Form, utility: string, style = '', inner = 'Text'): string
{
    const styleAttribute = style ? ` style="${style}"` : '';
    return form === 'class'
        ? `<div class="${utility}"${styleAttribute} data-target>${inner}</div>`
        : `<rl-div ${utility}${styleAttribute} data-target>${inner}</rl-div>`;
}

describe.each(FORMS)('a row in the %s form', form =>
{
    const three = block(150) + block(150) + block(150);

    it('wraps its elements onto the next line when they do not fit', async () =>
    {
        const { all, remove } = await mount(layoutOf(form, 'row', [], '', three));
        const [first, second, third] = all('div, rl-div').filter(element => element.style.width).map(box);
        expect(second.top).toBe(first.top);
        expect(third.top).toBeGreaterThan(first.top);
        remove();
    });

    it('keeps its elements on one line with rl-nowrap', async () =>
    {
        const { all, remove } = await mount(layoutOf(form, 'row', ['rl-nowrap'], '', three));
        const tops = all('[style]').filter(element => element.style.width).map(element => box(element).top);
        expect(new Set(tops).size).toBe(1);
        remove();
    });

    it('wraps in reverse with rl-wrap-reverse, so a new line is above', async () =>
    {
        const { all, remove } = await mount(layoutOf(form, 'row', ['rl-wrap-reverse'], 'height: 100px;', three));
        const [first, , third] = all('[style]').filter(element => element.style.width).map(box);
        expect(third.top).toBeLessThan(first.top);
        remove();
    });

    it('scrolls sideways with rl-nowrap-scroll, and keeps each element at its width', async () =>
    {
        const { target, all, remove } = await mount(layoutOf(form, 'row', ['rl-nowrap-scroll'], 'width: 120px;', block(300) + block(300)));
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
        const { all, remove } = await mount(layoutOf(form, 'row', [utility], '', block(100) + block(100)));
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
        const { target, remove } = await mount(layoutOf(form, 'row', [utility], 'height: 100px;', child));
        expect([box(target).top, box(target).height]).toEqual([top, height]);
        remove();
    });
});

describe.each(FORMS)('a column in the %s form', form =>
{
    it('stacks its elements one under another', async () =>
    {
        const { all, remove } = await mount(layoutOf(form, 'column', [], '', block(100, 30) + block(100, 30)));
        expect(all('[style]').filter(element => element.style.width === '100px').map(element => box(element).top)).toEqual([0, 30]);
        remove();
    });

    it('stretches its elements across by default', async () =>
    {
        const { target, remove } = await mount(layoutOf(form, 'column', [], '', '<div data-target>Text</div>'));
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
        const { target, remove } = await mount(layoutOf(form, 'column', [utility], '', '<div data-target style="width: 100px;">Text</div>'));
        expect(box(target).left).toBe(left);
        remove();
    });

    it('centers its text with rl-align-center', async () =>
    {
        const { target, remove } = await mount(layoutOf(form, 'column', ['rl-align-center'], '', '<div data-target>Text</div>'));
        expect(getComputedStyle(target.parentElement!).textAlign).toBe('center');
        remove();
    });

    it.each([
        ['rl-justify-start', [0, 30]],
        ['rl-justify-center', [70, 100]],
        ['rl-justify-end', [140, 170]],
        ['rl-justify-between', [0, 170]],
    ] as const)('places two elements 30px high in a column 200px high with %s at %j', async (utility, tops) =>
    {
        const { all, remove } = await mount(layoutOf(form, 'column', [utility], 'height: 200px;', block(100, 30) + block(100, 30)));
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
        const { all, remove } = await mount(layoutOf(form, 'grid', [], '', cells(8)), { width: 480 });
        expect(columnsOf(all)).toBe(4);
        remove();
    });

    it('shares the width the cells leave', async () =>
    {
        const { all, remove } = await mount(layoutOf(form, 'grid', [], '', cells(4)), { width: 480 });
        expect(all('[style]').filter(element => element.style.height === '20px').map(element => box(element).width)).toEqual([120, 120, 120, 120]);
        remove();
    });

    it('widens the cells in use with fit, and keeps room for the empty ones with fill', async () =>
    {
        const fit = await mount(layoutOf(form, 'grid', ['rl-grid-fit-s'], '', cells(2)), { width: 480 });
        const fill = await mount(layoutOf(form, 'grid', ['rl-grid-fill-s'], '', cells(2)), { width: 480 });
        const widthOf = (all: (selector: string) => HTMLElement[]): number[] => all('[style]').filter(element => element.style.height === '20px').map(element => box(element).width);
        expect(widthOf(fit.all)).toEqual([240, 240]);
        expect(widthOf(fill.all)).toEqual([120, 120]);
        fit.remove();
        fill.remove();
    });

    it('is never narrower than one cell is wide: a grid narrower than a cell has one column as wide as the grid', async () =>
    {
        const { all, remove } = await mount(layoutOf(form, 'grid', ['rl-grid-fit-2xl'], 'width: 120px;', cells(3)), { width: 480 });
        expect(all('[style]').filter(element => element.style.height === '20px').map(element => box(element).width)).toEqual([120, 120, 120]);
        remove();
    });
});

describe.each(FORMS)('a frame in the %s form', form =>
{
    it('centers one element in the width and the height of its parent', async () =>
    {
        const { target, remove } = await mount(layoutOf(form, 'frame', [], '', '<div data-target style="width: 100px; height: 50px;"></div>'), { width: 480, height: 240 });
        expect(box(target)).toMatchObject({ left: 190, top: 95, width: 100, height: 50 });
        remove();
    });

    it('keeps an element that is too big inside, without scrolling it', async () =>
    {
        const { target, remove } = await mount(layoutOf(form, 'frame', [], '', '<div data-target style="width: 1000px; height: 1000px;"></div>'), { width: 480, height: 240 });
        expect(box(target)).toMatchObject({ width: 480, height: 240 });
        expect(getComputedStyle(target).overflowY).toBe('visible');
        remove();
    });

    it('fits an image in the frame, with its proportions', async () =>
    {
        const source = 'data:image/svg+xml,' + encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" width="600" height="300"/>');
        const { target, remove } = await mount(layoutOf(form, 'frame', [], '', `<img data-target src="${source}">`), { width: 480, height: 240 });
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
        const wide = await mount(boxWith(form, 'rl-width-s'), { width: 600 });
        const narrow = await mount(boxWith(form, 'rl-width-s'), { width: 300 });
        expect(box(wide.target).width).toBe(480);
        expect(box(narrow.target).width).toBe(300);
        wide.remove();
        narrow.remove();
    });

    it('does not center on its own', async () =>
    {
        const { target, remove } = await mount(boxWith(form, 'rl-width-s'), { width: 600 });
        expect(box(target).left).toBe(0);
        remove();
    });

    it('centers with rl-center-self', async () =>
    {
        const { target, remove } = await mount(boxWith(form, 'rl-width-s rl-center-self'), { width: 600 });
        expect(box(target).left).toBe(60);
        remove();
    });

    it('makes an element as tall as its parent with rl-height-full', async () =>
    {
        const { target, remove } = await mount(`<div style="height: 200px;">${boxWith(form, 'rl-height-full')}</div>`);
        expect(box(target).height).toBe(200);
        remove();
    });
});

// The scales. Each step is a size the docs name, and 1.0 would freeze them, so each is checked against its number.

const SPACE: [string, number][] = [['0', 0], ['xs', 2], ['s', 4], ['m', 8], ['l', 16], ['xl', 24], ['2xl', 36]];
const WIDTH: [string, number][] = [['xs', 320], ['s', 480], ['m', 640], ['l', 768], ['xl', 1024], ['2xl', 1280]];
const GRID: [string, number][] = [['xs', 50], ['s', 100], ['m', 150], ['l', 200], ['xl', 250], ['2xl', 320]];
const TEXT: [string, number][] = [['xs', 10], ['s', 12], ['m', 14], ['l', 16], ['xl', 24], ['2xl', 36]];

describe.each(FORMS)('the spacing scale in the %s form', form =>
{
    it.each(SPACE)('rl-gap-%s is %ipx', async (size, pixels) =>
    {
        const { target, remove } = await mount(layoutOf(form, 'column', [`rl-gap-${size}`], '', '<div>One</div><div>Two</div>'));
        expect([getComputedStyle(target).rowGap, getComputedStyle(target).columnGap]).toEqual([`${pixels}px`, `${pixels}px`]);
        remove();
    });

    it.each(SPACE)('rl-padding-%s is %ipx on every side', async (size, pixels) =>
    {
        const { target, remove } = await mount(boxWith(form, `rl-padding-${size}`));
        const style = getComputedStyle(target);
        expect([style.paddingTop, style.paddingRight, style.paddingBottom, style.paddingLeft]).toEqual(Array(4).fill(`${pixels}px`));
        remove();
    });

    it.each(SPACE)('rl-padding-x-%s is %ipx on the sides, and rl-padding-y-%s the same above and below', async (size, pixels) =>
    {
        const across = await mount(boxWith(form, `rl-padding-x-${size}`));
        const down = await mount(boxWith(form, `rl-padding-y-${size}`));
        const x = getComputedStyle(across.target);
        const y = getComputedStyle(down.target);
        expect([x.paddingLeft, x.paddingRight, x.paddingTop, x.paddingBottom]).toEqual([`${pixels}px`, `${pixels}px`, '0px', '0px']);
        expect([y.paddingTop, y.paddingBottom, y.paddingLeft, y.paddingRight]).toEqual([`${pixels}px`, `${pixels}px`, '0px', '0px']);
        across.remove();
        down.remove();
    });

    it.each(SPACE)('rl-radius-%s is %ipx', async (size, pixels) =>
    {
        const { target, remove } = await mount(boxWith(form, `rl-radius-${size}`));
        expect(getComputedStyle(target).borderTopLeftRadius).toBe(`${pixels}px`);
        remove();
    });
});

describe.each(FORMS)('the width scale in the %s form', form =>
{
    it.each(WIDTH)('rl-width-%s is %ipx wide in a parent that is wider', async (size, pixels) =>
    {
        const { target, remove } = await mount(boxWith(form, `rl-width-${size}`), { width: 1400 });
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
            const exact = await mount(layoutOf(form, 'grid', [`rl-grid-${kind}-${size}`], `width: ${pixels * 3}px;`, cells), { width: 1000 });
            const narrower = await mount(layoutOf(form, 'grid', [`rl-grid-${kind}-${size}`], `width: ${pixels * 3 - 1}px;`, cells), { width: 1000 });
            expect(columnsOf(exact.all)).toBe(3);
            expect(columnsOf(narrower.all)).toBe(2);
            exact.remove();
            narrower.remove();
        });
    });
});

describe('the text scale', () =>
{
    it.each(TEXT)('rl-text-%s is %ipx', async (size, pixels) =>
    {
        const { target, remove } = await mount(boxWith('class', `rl-text-${size}`));
        expect(getComputedStyle(target).fontSize).toBe(`${pixels}px`);
        remove();
    });

    it.each([['tight', 20], ['normal', 24], ['loose', 32]] as [string, number][])('rl-textline-%s is a line height of %ipx in 16px text', async (name, pixels) =>
    {
        const { target, remove } = await mount(boxWith('class', `rl-textline-${name}`));
        expect(getComputedStyle(target).lineHeight).toBe(`${pixels}px`);
        remove();
    });

    it.each([['bold', '700'], ['medium', '500'], ['regular', '400']])('rl-font-%s is a weight of %s', async (name, weight) =>
    {
        const { target, remove } = await mount(boxWith('class', `rl-font-${name}`));
        expect(getComputedStyle(target).fontWeight).toBe(weight);
        remove();
    });
});
