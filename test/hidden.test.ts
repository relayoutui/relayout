import { describe, expect, it } from 'vitest';
import '../dist/css/relayout.css';
import '../dist/js/relayout.js';
import { FORMS, boxOf, mount, type Form } from './stage.js';

// An element's `display` beats the browser's `display: none` for `hidden`, so a layout, which sets one, stayed on the
// page when an app set `hidden` on it. A layout is hidden as any other element is. `hidden="until-found"` is the
// exception, which the browser hides with `content-visibility` so that the page's find reaches it. Each case is a div
// with the class, and an <rl-div> with it in the page and inside another component's shadow root.

const CLASSES = ['rl-column', 'rl-row', 'rl-grid', 'rl-frame', 'rl-nowrap-scroll'];
// An <rl-div> is a block of its own, with no class too
const ELEMENT_CLASSES = ['', ...CLASSES];

const CASES = FORMS.flatMap(form => (form === 'class' ? CLASSES : ELEMENT_CLASSES).map(classes => ({ form, classes, name: classes || 'no class' })));

/** The display and size of the box with the classes, with the `hidden` attribute of the value. */
async function displayOf(form: Form, classes: string, hidden: string): Promise<{ display: string; width: number; height: number }>
{
    const { target, remove } = await mount(boxOf(form, classes, hidden, 'Text'), { form });
    const { width, height } = target.getBoundingClientRect();
    const display = getComputedStyle(target).display;
    remove();
    return { display, width, height };
}

describe('hidden', () =>
{
    it.each(CASES)('hides a box with $name in the $form form', async ({ form, classes }) =>
    {
        expect(await displayOf(form, classes, 'hidden')).toEqual({ display: 'none', width: 0, height: 0 });
    });

    it.each(CASES)('shows a box with $name in the $form form again when hidden is taken off', async ({ form, classes }) =>
    {
        const { target, remove } = await mount(boxOf(form, classes, 'hidden', 'Text'), { form });
        target.hidden = false;
        expect(getComputedStyle(target).display).not.toBe('none');
        remove();
    });

    it.each(FORMS)('takes no room in a column in the %s form', async form =>
    {
        const inner = boxOf(form, 'rl-row', 'hidden style="height: 50px;"', 'Hidden') + '<div data-below>Below</div>';
        const { all, remove } = await mount(boxOf(form, 'rl-column', '', inner), { form });
        expect(all('[data-below]')[0].getBoundingClientRect().top).toBe(0);
        remove();
    });

    describe('with the value until-found', () =>
    {
        it.each(CASES)('leaves the display of a box with $name in the $form form to the browser', async ({ form, classes }) =>
        {
            const found = await displayOf(form, classes, 'hidden="until-found"');
            expect(found.display).not.toBe('none');
        });

        it.each(FORMS)('is read without regard to case in the %s form', async form =>
        {
            const found = await displayOf(form, 'rl-row', 'hidden="UNTIL-FOUND"');
            expect(found.display).not.toBe('none');
        });
    });

    describe.each(FORMS)('an image in a frame in the %s form', form =>
    {
        // The frame gives its images display: block, which would beat the display: none of hidden
        const SOURCE = 'data:image/svg+xml,' + encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" width="60" height="30"/>');
        const inFrame = (attribute: string): string => boxOf(form, 'rl-frame', 'style="height: 100px;"', `<img ${attribute} data-target src="${SOURCE}">`);

        it('is hidden', async () =>
        {
            const { target, remove } = await mount(inFrame('hidden'), { form });
            expect(getComputedStyle(target).display).toBe('none');
            remove();
        });

        it('is a block again when hidden is taken off', async () =>
        {
            const { target, remove } = await mount(inFrame('hidden'), { form });
            target.hidden = false;
            expect(getComputedStyle(target).display).toBe('block');
            remove();
        });

        it('is a block with no hidden', async () =>
        {
            const { target, remove } = await mount(inFrame(''), { form });
            expect(getComputedStyle(target).display).toBe('block');
            remove();
        });

        it('is left to the browser with hidden="until-found"', async () =>
        {
            const { target, remove } = await mount(inFrame('hidden="until-found"'), { form });
            expect(getComputedStyle(target).display).not.toBe('none');
            remove();
        });
    });

    it('leaves a div with no layout class to the browser', async () =>
    {
        const hidden = await displayOf('class', 'rl-padding-m', 'hidden');
        expect(hidden.display).toBe('none');
    });
});
