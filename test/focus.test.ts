import { userEvent } from 'vitest/browser';
import { describe, expect, it } from 'vitest';
import '../dist/css/relayout.css';
import '../dist/js/relayout.js';

// The base rule gives every element with an `rl-` class `box-sizing: border-box`, and takes the focus outline off the
// ones that aren't controls. A control keeps the browser's focus ring, so a field that fills its row with
// `rl-width-fill` shows where the keyboard is. The tests focus the element with the keyboard, as a user does, and read
// the outline Chrome draws.

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
    // the focus to it, from an element the keyboard is on, so it is shown the way a keyboard user's focus is.
    if (tabbable) await userEvent.tab();
    else target.focus();

    expect(document.activeElement, 'the keyboard did not reach the target').toBe(target);
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

    it('is still off on a layout container the keyboard reaches, a scroller', async () =>
    {
        const lines = Array.from({ length: 12 }, (_, index) => `<div>Line ${index}</div>`).join('');
        const { stage, target } = await focus(`<div class="rl-column rl-scroll" style="height: 60px;" data-target>${lines}</div>`);
        try
        {
            expect(getComputedStyle(target).outlineStyle).toBe('none');
        }
        finally
        {
            stage.remove();
        }
    });

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
