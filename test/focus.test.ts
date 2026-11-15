import { server, userEvent } from 'vitest/browser';
import { describe, expect, it } from 'vitest';
import '../dist/css/relayout.css';
import '../dist/js/relayout.js';

// The base rule gives every element with an `rl-` class `box-sizing: border-box` and nothing else: it doesn't touch the
// outline. An element keeps the focus ring its browser gives it, with an `rl-` class or without, so a field that fills
// its row with `rl-width-fill` shows where the keyboard is, and so does a box that scrolls, a video with controls,
// and anything else the browser lets the keyboard reach. A page's own outline stays too. `rl-outline-none` takes a
// ring off. The tests focus the element with the keyboard, as a user does, and read the outline the browser draws,
// and compare an element with its class to the same element without it in the same browser.

interface Case
{
    name: string;
    // The markup, with `classes` as the class attribute, or none
    html: (classes: string) => string;
    // false for an element only a script can focus: tabindex="-1"
    tabbable?: boolean;
}

const attribute = (classes: string): string => classes ? ` class="${classes}"` : '';

const CONTROLS: Case[] = [
    { name: 'an input', html: classes => `<input${attribute(classes)} data-target>` },
    { name: 'a link', html: classes => `<a href="#"${attribute(classes)} data-target>Link</a>` },
    { name: 'a button', html: classes => `<button${attribute(classes)} data-target>Button</button>` },
    { name: 'a select', html: classes => `<select${attribute(classes)} data-target><option>One</option></select>` },
    { name: 'a textarea', html: classes => `<textarea${attribute(classes)} data-target></textarea>` },
    { name: 'a summary', html: classes => `<details><summary${attribute(classes)} data-target>Summary</summary>Text</details>` },
    { name: 'an element with tabindex 0', html: classes => `<div${attribute(classes)} tabindex="0" data-target>Text</div>` },
    { name: 'an element with tabindex -1', html: classes => `<div${attribute(classes)} tabindex="-1" data-target>Text</div>`, tabbable: false },
    { name: 'an editable element', html: classes => `<div${attribute(classes)} contenteditable data-target>Text</div>` },
];

const CLASSES = ['rl-width-fill', 'rl-padding-m', 'rl-row rl-gap-s', 'rl-column'];

/** Shows the markup in a stage, with a button before it, and puts the keyboard on the target. */
async function focus(html: string, tabbable = true): Promise<{ stage: HTMLElement; target: HTMLElement }>
{
    const stage = document.createElement('div');
    stage.style.cssText = 'position: absolute; left: 0; top: 0; width: 480px; font: 16px/20px sans-serif;';
    stage.innerHTML = `<button data-start>Start</button>${html}`;
    document.body.append(stage);

    const start = stage.querySelector<HTMLElement>('[data-start]')!;
    const target = stage.querySelector<HTMLElement>('[data-target]')!;
    start.focus();
    // Tab goes to the next element in the page. An element with tabindex="-1" is not on that path: a script moves
    // the focus to it, from an element the keyboard is on, so it is shown the way a keyboard user's focus is. So is an
    // element that this browser's Tab skips: Safari's skips links and buttons, which a keyboard user reaches with
    // Option+Tab, and the focus is then drawn as the keyboard's, since the last thing the user did was press a key.
    if (tabbable) await userEvent.tab();
    if (document.activeElement !== target) target.focus();

    expect(document.activeElement, 'the target did not take the focus').toBe(target);
    expect(target.matches(':focus-visible'), 'the target is not shown as focused by the keyboard').toBe(true);
    return { stage, target };
}

describe('the focus ring', () =>
{
    for (const control of CONTROLS)
    {
        it(`shows on ${control.name} with no class`, async () =>
        {
            const { stage, target } = await focus(control.html(''), control.tabbable);
            try
            {
                expect(getComputedStyle(target).outlineStyle).not.toBe('none');
            }
            finally
            {
                stage.remove();
            }
        });

        it.each(CLASSES)(`shows on ${control.name} with class %s`, async classes =>
        {
            const { stage, target } = await focus(control.html(classes), control.tabbable);
            try
            {
                expect(getComputedStyle(target).outlineStyle).not.toBe('none');
            }
            finally
            {
                stage.remove();
            }
        });
    }

    it('is the browser\'s own on an element whose class only looks like rl-', async () =>
    {
        const { stage, target } = await focus('<a href="#" class="girl-card" data-target>Link</a>');
        try
        {
            expect(getComputedStyle(target).outlineStyle).not.toBe('none');
        }
        finally
        {
            stage.remove();
        }
    });
});

/** A box that scrolls, so the keyboard can stop on it, in the class form and as an element. */
interface Scroller
{
    name: string;
    html: (extra: string) => string;
}

const LINES = Array.from({ length: 12 }, (_, index) => `<div>Line ${index}</div>`).join('');
const WIDE = '<div style="width: 300px;">A wide line</div><div style="width: 300px;">Another wide line</div>';

const SCROLLERS: Scroller[] = [
    { name: 'a class rl-scroll', html: extra => `<div class="rl-column rl-scroll${extra}" style="height: 60px;" data-target>${LINES}</div>` },
    { name: 'a class rl-nowrap-scroll', html: extra => `<div class="rl-row rl-nowrap-scroll${extra}" style="width: 120px;" data-target>${WIDE}</div>` },
    { name: 'a class rl-scroll with other classes', html: extra => `<div class="rl-gap-m rl-padding-m rl-column rl-scroll${extra}" style="height: 60px;" data-target>${LINES}</div>` },
    { name: 'an element rl-scroll', html: extra => `<rl-column rl-scroll${extra ? ' rl-outline-none' : ''} style="height: 60px;" data-target>${LINES}</rl-column>` },
    { name: 'an element rl-nowrap-scroll', html: extra => `<rl-row rl-nowrap-scroll${extra ? ' rl-outline-none' : ''} style="width: 120px;" data-target>${WIDE}</rl-row>` },
];

describe('a box that scrolls', () =>
{
    // Chrome and Firefox let the keyboard reach a box that scrolls, so the arrow keys scroll it. Safari's engine doesn't,
    // and a box it can't reach has no ring to show, so these are skipped there, by the browser's name: a regression in
    // a browser that does reach it has to fail the test, not skip it.
    it.for(SCROLLERS)('shows the focus ring: $name', async ({ html }, { skip }) =>
    {
        if (server.browser === 'webkit') return skip('WebKit\'s keyboard does not reach a box that scrolls');
        const { stage, target } = await focus(html(''));
        try
        {
            expect(getComputedStyle(target).outlineStyle).not.toBe('none');
        }
        finally
        {
            stage.remove();
        }
    });

    it.for(SCROLLERS)('shows no ring with rl-outline-none: $name', async ({ html }, { skip }) =>
    {
        if (server.browser === 'webkit') return skip('WebKit\'s keyboard does not reach a box that scrolls');
        const { stage, target } = await focus(html(' rl-outline-none'));
        try
        {
            expect(getComputedStyle(target).outlineStyle).toBe('none');
        }
        finally
        {
            stage.remove();
        }
    });
});

interface Reached
{
    name: string;
    html: (classes: string) => string;
    /** True where WebKit's keyboard doesn't reach the element, which is a box that scrolls */
    notInWebkit?: boolean;
}

// What the base rule used to take the ring off, when the element carried an `rl-` class, and the browser's own ring
// is back on: a box the page's own CSS makes scroll has nothing a rule could match, and a video with controls is
// not in a list of controls
const REACHED: Reached[] = [
    { name: 'a pre that the page\'s CSS makes scroll', notInWebkit: true, html: classes => `<pre class="${classes}" style="overflow: auto; height: 40px; margin: 0;" data-target>${'line\n'.repeat(12)}</pre>` },
    { name: 'a div that the page\'s CSS makes scroll', notInWebkit: true, html: classes => `<div class="${classes}" style="overflow: auto; height: 40px;" data-target>${LINES}</div>` },
    { name: 'a video with controls', html: classes => `<video class="${classes}" controls width="200" height="100" data-target></video>` },
    { name: 'an element with an rl- class and nothing else', html: classes => `<a class="${classes}" href="#" data-target>Link</a>` },
];

describe('what the browser lets the keyboard reach', () =>
{
    it.for(REACHED)('shows the ring on $name with an rl- class when it shows it without', async ({ html, notInWebkit }, { skip }) =>
    {
        if (notInWebkit && server.browser === 'webkit') return skip('WebKit\'s keyboard does not reach a box that scrolls');
        const plain = await focus(html(''));
        const without = getComputedStyle(plain.target).outlineStyle;
        plain.stage.remove();
        expect(without, 'the browser draws no ring on it without the class either').not.toBe('none');

        const withClass = await focus(html('rl-padding-m rl-width-s'));
        expect(getComputedStyle(withClass.target).outlineStyle).toBe(without);
        withClass.stage.remove();
    });

    it.for(REACHED)('takes the ring off $name with rl-outline-none', async ({ html, notInWebkit }, { skip }) =>
    {
        if (notInWebkit && server.browser === 'webkit') return skip('WebKit\'s keyboard does not reach a box that scrolls');
        const { stage, target } = await focus(html('rl-outline-none'));
        expect(getComputedStyle(target).outlineStyle).toBe('none');
        stage.remove();
    });
});

describe('an outline of the page\'s own', () =>
{
    it.each(['rl-padding-m', 'rl-column', 'rl-row rl-gap-m'])('stays on an element with the classes %s, whichever style sheet comes last', classes =>
    {
        // The page's rule comes before relayout.css, so a rule in it with the same weight would win
        const style = document.createElement('style');
        style.textContent = '.card { outline: 2px solid rgb(255, 0, 0); }';
        document.head.prepend(style);
        const element = document.createElement('div');
        element.className = `card ${classes}`;
        document.body.append(element);
        try
        {
            const computed = getComputedStyle(element);
            expect([computed.outlineStyle, computed.outlineWidth]).toEqual(['solid', '2px']);
        }
        finally
        {
            element.remove();
            style.remove();
        }
    });
});

describe('rl-outline-none', () =>
{
    for (const control of CONTROLS)
    {
        it(`takes the ring off ${control.name}`, async () =>
        {
            const { stage, target } = await focus(control.html('rl-outline-none'), control.tabbable);
            try
            {
                expect(getComputedStyle(target).outlineStyle).toBe('none');
            }
            finally
            {
                stage.remove();
            }
        });
    }

    it('takes the ring off a control that has other classes too', async () =>
    {
        const { stage, target } = await focus('<input class="rl-width-fill rl-outline-none" data-target>');
        try
        {
            expect(getComputedStyle(target).outlineStyle).toBe('none');
        }
        finally
        {
            stage.remove();
        }
    });

    it.each(['rl-column', 'rl-row', 'rl-grid', 'rl-frame', 'rl-div'])('is an attribute of <%s>', async tag =>
    {
        // With tabindex the element is a control, so it shows the ring unless the attribute takes it off. Each is read
        // while it has the keyboard: an element that has lost it has no outline either way.
        const withIt = await focus(`<${tag} rl-outline-none tabindex="0" data-target>Text</${tag}>`);
        const outlineWith = getComputedStyle(withIt.target).outlineStyle;
        withIt.stage.remove();

        const without = await focus(`<${tag} tabindex="0" data-target>Text</${tag}>`);
        const outlineWithout = getComputedStyle(without.target).outlineStyle;
        without.stage.remove();

        expect(outlineWith).toBe('none');
        expect(outlineWithout).not.toBe('none');
    });
});

describe('box-sizing', () =>
{
    // The first class, after a space, after a tab and after a line feed match, and `girl-card` doesn't
    const CASES = [
        { name: 'one class', classes: 'rl-thing', expected: 'border-box' },
        { name: 'a class after a space', classes: 'card rl-thing', expected: 'border-box' },
        { name: 'a class after a tab', classes: 'card\trl-thing', expected: 'border-box' },
        { name: 'a class after a line feed', classes: 'card\nrl-thing', expected: 'border-box' },
        { name: 'girl-card', classes: 'girl-card', expected: 'content-box' },
        { name: 'a class that ends in rl-', classes: 'card-rl-thing', expected: 'content-box' },
    ];

    it.each(CASES)('on an element with $name is $expected', ({ classes, expected }) =>
    {
        const element = document.createElement('div');
        element.setAttribute('class', classes);
        document.body.append(element);
        try
        {
            expect(getComputedStyle(element).boxSizing).toBe(expected);
        }
        finally
        {
            element.remove();
        }
    });

    it.each(['input', 'a', 'button', 'select', 'textarea', 'summary'])('on a %s with an rl- class is still border-box', tag =>
    {
        const element = document.createElement(tag);
        element.className = 'rl-width-fill';
        document.body.append(element);
        try
        {
            expect(getComputedStyle(element).boxSizing).toBe('border-box');
        }
        finally
        {
            element.remove();
        }
    });
});
