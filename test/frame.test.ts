import { describe, expect, it } from 'vitest';
import '../dist/css/relayout.css';
import '../dist/js/relayout.js';
import { FORMS, boxOf, mount, type Form } from './stage.js';

// The children of a frame stay inside it but don't scroll on their own, so a shadow or a focus ring on one isn't
// clipped. A child that takes rl-scroll does scroll, as in every other layout.

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
