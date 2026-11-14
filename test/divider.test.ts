import { describe, expect, it } from 'vitest';
import '../dist/css/relayout.css';
import '../dist/js/relayout.js';

// A divider takes its direction from the layout it is a direct child of: a line across a column, and down a row.
// Anywhere else it is a line across. `vertical` is gone, class and attribute: it does nothing.

type Form = 'class' | 'element';

interface Parent
{
    name: string;
    layout?: string;
    style?: string;
    // across, or down
    line: 'across' | 'down';
}

const PARENTS: Parent[] = [
    { name: 'a column', layout: 'rl-column', line: 'across' },
    { name: 'a row', layout: 'rl-row', line: 'down' },
    { name: 'a row with a height', layout: 'rl-row', style: 'height: 100px;', line: 'down' },
    { name: 'a grid', layout: 'rl-grid', line: 'across' },
    { name: 'a frame', layout: 'rl-frame', line: 'across' },
    { name: 'a plain div', line: 'across' },
];

/** A divider between two lines of text, in a parent of the form's kind, with what the old `vertical` looked like. */
async function place(form: Form, parent: Parent, vertical: boolean): Promise<{ stage: HTMLElement; divider: HTMLElement }>
{
    const stage = document.createElement('div');
    stage.style.cssText = 'position: absolute; left: 0; top: 0; width: 480px; height: 240px; font: 16px/20px sans-serif;';

    const container = document.createElement(form === 'element' && parent.layout ? parent.layout : 'div');
    if (form === 'class' && parent.layout) container.className = parent.layout;
    if (parent.style) container.style.cssText = parent.style;

    const divider = document.createElement(form === 'element' ? 'rl-divider' : 'div');
    if (form === 'class') divider.className = vertical ? 'rl-divider vertical' : 'rl-divider';
    else if (vertical) divider.setAttribute('vertical', '');

    const before = document.createElement('div');
    before.textContent = 'Before';
    const after = document.createElement('div');
    after.textContent = 'After';
    container.append(before, divider, after);
    stage.append(container);
    document.body.append(stage);
    await (container as HTMLElement & { updateComplete?: Promise<boolean> }).updateComplete;
    await (divider as HTMLElement & { updateComplete?: Promise<boolean> }).updateComplete;
    return { stage, divider };
}

function lineOf(divider: HTMLElement): { width: number; height: number; top: string; left: string }
{
    const { width, height } = divider.getBoundingClientRect();
    const style = getComputedStyle(divider);
    return { width, height, top: style.borderTopWidth, left: style.borderLeftWidth };
}

describe.each(['class', 'element'] as Form[])('a divider in the %s form', form =>
{
    describe.each(PARENTS)('in $name', parent =>
    {
        // A line across has its border on top and no width to speak of: it is as high as its border. A line down is the reverse.
        it(`is a line ${parent.line}`, async () =>
        {
            const { stage, divider } = await place(form, parent, false);
            const line = lineOf(divider);
            if (parent.line === 'across') expect(line).toMatchObject({ height: 1, top: '1px', left: '0px' });
            else expect(line).toMatchObject({ width: 1, top: '0px', left: '1px' });
            expect(parent.line === 'across' ? line.width : line.height).toBeGreaterThan(1);
            stage.remove();
        });

        it('does not change with the old `vertical`', async () =>
        {
            const plain = await place(form, parent, false);
            const old = await place(form, parent, true);
            expect(lineOf(old.divider)).toEqual(lineOf(plain.divider));
            plain.stage.remove();
            old.stage.remove();
        });
    });

    it('is as tall as the row it is in', async () =>
    {
        const { stage, divider } = await place(form, PARENTS[2], false);
        expect(lineOf(divider).height).toBe(100);
        stage.remove();
    });
});
