import { describe, expect, it } from 'vitest';
import '../dist/css/relayout.css';
import '../dist/js/relayout.js';

// The children of a frame stay inside it but don't scroll on their own, so a shadow or a focus ring on one isn't
// clipped. A child that takes rl-scroll does scroll, as in every other layout.

interface Form
{
    name: string;
    // a frame, and a way to mark a child to scroll
    frame: () => HTMLElement;
    scroll: (child: HTMLElement) => void;
}

const FORMS: Form[] = [
    {
        name: 'class',
        frame: () => Object.assign(document.createElement('div'), { className: 'rl-frame' }),
        scroll: child => child.classList.add('rl-scroll'),
    },
    {
        name: 'element',
        frame: () => document.createElement('rl-frame'),
        scroll: child => child.setAttribute('rl-scroll', ''),
    },
];

/** A frame 300 by 100 with one child that is 400 tall inside, so it can't fit. */
async function build(form: Form, scrolls: boolean): Promise<{ stage: HTMLElement; child: HTMLElement }>
{
    const stage = document.createElement('div');
    stage.style.cssText = 'position: absolute; left: 0; top: 0; width: 300px; height: 100px;';
    const frame = form.frame();
    const child = document.createElement('div');
    child.style.cssText = 'width: 200px; box-shadow: 0 0 20px black;';
    const tall = document.createElement('div');
    tall.style.height = '400px';
    child.append(tall);
    if (scrolls) form.scroll(child);
    frame.append(child);
    stage.append(frame);
    document.body.append(stage);
    await (frame as HTMLElement & { updateComplete?: Promise<boolean> }).updateComplete;
    return { stage, child };
}

describe.each(FORMS)('a child of a $name frame', form =>
{
    it('stays inside the frame and does not scroll on its own', async () =>
    {
        const { stage, child } = await build(form, false);
        const style = getComputedStyle(child);
        expect([style.overflowX, style.overflowY]).toEqual(['visible', 'visible']);
        expect(child.getBoundingClientRect().height).toBe(100);
        stage.remove();
    });

    it('scrolls with rl-scroll', async () =>
    {
        const { stage, child } = await build(form, true);
        const style = getComputedStyle(child);
        expect([style.overflowX, style.overflowY]).toEqual(['auto', 'auto']);
        expect(child.getBoundingClientRect().height).toBe(100);
        child.scrollTop = 50;
        expect(child.scrollTop).toBe(50);
        stage.remove();
    });
});
