import { describe, expect, it } from 'vitest';
import '../dist/css/relayout.css';
import '../dist/js/relayout.js';
import { FORMS, boxOf, mount, type Form } from './stage.js';

// The children of a frame stay inside it but don't scroll on their own, so a shadow or a focus ring on one isn't
// clipped. A child that takes rl-scroll does scroll, as in every other layout. A child keeps a width of its own: a
// width class, and a max-width of the page's own, or of the component's inside a shadow root.

/** A frame 300 by 100 with one child that is 400 tall inside, so it can't fit. */
function frameOf(form: Form, scrolls: boolean): string
{
    const child = boxOf(form, scrolls ? 'rl-scroll' : '', 'style="width: 200px; box-shadow: 0 0 20px black;" data-target', '<div style="height: 400px;"></div>');
    return boxOf(form, 'rl-frame', '', child);
}

describe.each(FORMS)('a child of a frame in the %s form', form =>
{
    it('stays inside the frame and does not scroll on its own', async () =>
    {
        const { target, remove } = await mount(frameOf(form, false), { width: 300, height: 100, form });
        const style = getComputedStyle(target);
        expect([style.overflowX, style.overflowY]).toEqual(['visible', 'visible']);
        expect(target.getBoundingClientRect().height).toBe(100);
        remove();
    });

    it('scrolls with rl-scroll', async () =>
    {
        const { target, remove } = await mount(frameOf(form, true), { width: 300, height: 100, form });
        const style = getComputedStyle(target);
        expect([style.overflowX, style.overflowY]).toEqual(['auto', 'auto']);
        expect(target.getBoundingClientRect().height).toBe(100);
        target.scrollTop = 50;
        expect(target.scrollTop).toBe(50);
        remove();
    });
});

describe.each(FORMS)('the width of a frame\'s child in the %s form', form =>
{
    // A child as wide as it can be, in a frame 400 wide
    const child = (classes: string): string => boxOf(form, 'rl-frame', '', boxOf(form, classes, 'style="width: 300px;" data-target', 'Child'));
    const widthOf = (target: HTMLElement): number => target.getBoundingClientRect().width;

    it('is kept inside the frame', async () =>
    {
        const { target, remove } = await mount(boxOf(form, 'rl-frame', '', boxOf(form, '', 'style="width: 600px;" data-target', 'Child')), { form });
        expect(widthOf(target)).toBe(400);
        remove();
    });

    it('keeps the width of rl-width-xs', async () =>
    {
        const { target, remove } = await mount(boxOf(form, 'rl-frame', '', boxOf(form, 'rl-width-xs', 'data-target', 'Child')), { width: 600, form });
        expect(getComputedStyle(target).maxWidth).not.toBe('100%');
        expect(widthOf(target)).toBe(320);
        remove();
    });

    // An image 300 wide, which the frame keeps inside it like any child
    const IMAGE = 'data:image/svg+xml,' + encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" width="300" height="100"/>');

    it.each([
        { name: 'one class', css: '.logo { max-width: 120px; }', markup: () => child('logo'), pixels: 120 },
        { name: 'a class and a tag', css: '.logo img { max-width: 80px; }', markup: () => `<div class="logo">${boxOf(form, 'rl-frame', '', `<img src="${IMAGE}" data-target>`)}</div>`, pixels: 80 },
    ])('keeps a max-width of the page\'s own, of $name', async ({ css, markup, pixels }) =>
    {
        // After relayout.css in the page, or in the component that holds the shadow root
        const style = document.createElement('style');
        style.textContent = css;
        if (form !== 'shadow') document.head.append(style);
        const { target, remove } = await mount(markup(), { form, componentCss: form === 'shadow' ? css : undefined });
        try
        {
            if (target instanceof HTMLImageElement) await target.decode();
            expect(widthOf(target)).toBe(pixels);
        }
        finally
        {
            remove();
            style.remove();
        }
    });
});
