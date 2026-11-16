import { describe, expect, it } from 'vitest';
import '../dist/css/relayout.css';
import { mount } from './stage.js';

// Before the script runs, <rl-div> is an element the browser doesn't know, and such an element is inline. relayout.css
// makes it a block, and styles its classes as it does on any element, so an <rl-div> in the page has its layout before
// the script runs and doesn't jump when it does. Only relayout.css is loaded here, as on a page whose script hasn't run
// yet; the script is loaded at the end, to see that nothing moves.

const box = (element: HTMLElement): string =>
{
    const { left, top, width, height } = element.getBoundingClientRect();
    return [left, top, width, height].map(value => Math.round(value)).join(' ');
};

const ROW = '<rl-div class="rl-row rl-gap-m rl-padding-m" data-target><div style="width: 100px;">One</div><div class="rl-width-fill">Two</div></rl-div>';

describe('rl-div before its script runs', () =>
{
    it('is not defined yet', () =>
    {
        expect(customElements.get('rl-div')).toBeUndefined();
    });

    it('is a block', async () =>
    {
        const { target, remove } = await mount('<rl-div data-target>Text</rl-div>');
        expect(getComputedStyle(target).display).toBe('block');
        remove();
    });

    it.each([
        ['rl-row', 'flex'],
        ['rl-column', 'flex'],
        ['rl-grid', 'grid'],
        ['rl-frame', 'flex'],
        ['rl-nowrap-scroll', 'flex'],
    ])('has the display of %s', async (layout, display) =>
    {
        const { target, remove } = await mount(`<rl-div class="${layout}" data-target>Text</rl-div>`);
        expect(getComputedStyle(target).display).toBe(display);
        remove();
    });

    it('is hidden by hidden', async () =>
    {
        const { target, remove } = await mount('<rl-div class="rl-row" hidden data-target>Text</rl-div>');
        expect(getComputedStyle(target).display).toBe('none');
        remove();
    });

    it('lays out a row as the div does', async () =>
    {
        const element = await mount(ROW);
        const div = await mount(ROW.replace(/rl-div/g, 'div'));
        const boxes = (target: HTMLElement): string[] => [target, ...target.children as HTMLCollectionOf<HTMLElement>].map(box);
        expect(boxes(element.target)).toEqual(boxes(div.target));
        element.remove();
        div.remove();
    });

    it('does not move when the script runs', async () =>
    {
        const { target, all, remove } = await mount(ROW);
        const before = [target, ...all('div')].map(box);
        await import('../dist/js/relayout.js');
        await customElements.whenDefined('rl-div');
        await (target as HTMLElement & { updateComplete: Promise<boolean> }).updateComplete;
        expect(target.shadowRoot).not.toBeNull();
        expect([target, ...all('div')].map(box)).toEqual(before);
        remove();
    });
});
