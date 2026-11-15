import { describe, expect, it } from 'vitest';
import '../dist/css/relayout.css';
import '../dist/js/relayout.js';
import { mount } from './stage.js';

// An element's `display` beats the browser's `display: none` for `hidden`, so a layout, which sets one, stayed on the
// page when an app set `hidden` on it. A layout is hidden as any other element is. `hidden="until-found"` is the
// exception, which the browser hides with `content-visibility` so that the page's find reaches it.

const CLASSES = ['rl-column', 'rl-row', 'rl-grid', 'rl-frame', 'rl-nowrap-scroll'];
const ELEMENTS = ['rl-column', 'rl-row', 'rl-grid', 'rl-frame', 'rl-div', 'rl-divider'];

/** The display of a div with the class, or of the element, hidden by the `hidden` attribute. */
async function displayOf(markup: string): Promise<{ display: string; width: number; height: number }>
{
    const { target, remove } = await mount(markup);
    const { width, height } = target.getBoundingClientRect();
    const display = getComputedStyle(target).display;
    remove();
    return { display, width, height };
}

describe('hidden', () =>
{
    it.each(CLASSES)('hides a div with the class %s', async layout =>
    {
        const hidden = await displayOf(`<div class="${layout}" hidden>Text</div>`);
        expect(hidden).toEqual({ display: 'none', width: 0, height: 0 });
    });

    it.each(ELEMENTS)('hides <%s>', async tag =>
    {
        const hidden = await displayOf(`<${tag} hidden>Text</${tag}>`);
        expect(hidden).toEqual({ display: 'none', width: 0, height: 0 });
    });

    it.each(CLASSES)('shows a div with the class %s again when hidden is taken off', async layout =>
    {
        const { target, remove } = await mount(`<div class="${layout}" hidden>Text</div>`);
        target.hidden = false;
        expect(getComputedStyle(target).display).not.toBe('none');
        remove();
    });

    it.each(ELEMENTS)('shows <%s> again when hidden is taken off', async tag =>
    {
        const { target, remove } = await mount(`<${tag} hidden>Text</${tag}>`);
        target.hidden = false;
        expect(getComputedStyle(target).display).not.toBe('none');
        remove();
    });

    it('takes no room in a column', async () =>
    {
        const { all, remove } = await mount('<div class="rl-column"><div class="rl-row" hidden style="height: 50px;">Hidden</div><div data-below>Below</div></div>');
        expect(all('[data-below]')[0].getBoundingClientRect().top).toBe(0);
        remove();
    });

    it('hides an element that is in an element', async () =>
    {
        const { all, remove } = await mount('<rl-column><rl-row hidden>Hidden</rl-row><div data-below>Below</div></rl-column>');
        expect(all('[data-below]')[0].getBoundingClientRect().top).toBe(0);
        remove();
    });

    describe('with the value until-found', () =>
    {
        it.each(CLASSES)('leaves the display of a div with the class %s to the browser', async layout =>
        {
            const found = await displayOf(`<div class="${layout}" hidden="until-found">Text</div>`);
            expect(found.display).not.toBe('none');
        });

        it.each(ELEMENTS)('leaves the display of <%s> to the browser', async tag =>
        {
            const found = await displayOf(`<${tag} hidden="until-found">Text</${tag}>`);
            expect(found.display).not.toBe('none');
        });

        it('is read without regard to case', async () =>
        {
            const found = await displayOf('<div class="rl-row" hidden="UNTIL-FOUND">Text</div>');
            expect(found.display).not.toBe('none');
        });
    });

    describe('an image in a frame', () =>
    {
        // The frame gives its images display: block, which would beat the display: none of hidden
        const SOURCE = 'data:image/svg+xml,' + encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" width="60" height="30"/>');
        const IN_FRAME = [
            { name: 'a div with the class rl-frame', html: (attribute: string) => `<div class="rl-frame" style="height: 100px;"><img ${attribute} data-target src="${SOURCE}"></div>` },
            { name: '<rl-frame>', html: (attribute: string) => `<rl-frame style="height: 100px;"><img ${attribute} data-target src="${SOURCE}"></rl-frame>` },
        ];

        it.each(IN_FRAME)('is hidden in $name', async ({ html }) =>
        {
            const { target, remove } = await mount(html('hidden'));
            expect(getComputedStyle(target).display).toBe('none');
            remove();
        });

        it.each(IN_FRAME)('is a block again in $name when hidden is taken off', async ({ html }) =>
        {
            const { target, remove } = await mount(html('hidden'));
            target.hidden = false;
            expect(getComputedStyle(target).display).toBe('block');
            remove();
        });

        it.each(IN_FRAME)('is a block in $name with no hidden', async ({ html }) =>
        {
            const { target, remove } = await mount(html(''));
            expect(getComputedStyle(target).display).toBe('block');
            remove();
        });

        it.each(IN_FRAME)('is left to the browser in $name with hidden="until-found"', async ({ html }) =>
        {
            const { target, remove } = await mount(html('hidden="until-found"'));
            expect(getComputedStyle(target).display).not.toBe('none');
            remove();
        });
    });

    it('leaves a div with no layout class to the browser', async () =>
    {
        const hidden = await displayOf('<div class="rl-padding-m" hidden>Text</div>');
        expect(hidden.display).toBe('none');
    });
});
