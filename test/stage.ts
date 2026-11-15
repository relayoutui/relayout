// What the tests that measure layout share: a stage to put markup in, and the markup of a layout in each of its forms.

export type Form = 'class' | 'element';
export type Layout = 'column' | 'row' | 'grid' | 'frame';

export interface Mounted
{
    stage: HTMLElement;
    /** The element marked `data-target`, or the first element of the markup. */
    target: HTMLElement;
    /** Every element of the markup that matches. */
    all: (selector: string) => HTMLElement[];
    remove: () => void;
}

interface Size
{
    width?: number;
    height?: number;
}

/** Puts the markup in a stage and waits for the elements in it to render. */
export async function mount(html: string, size: Size = {}): Promise<Mounted>
{
    const stage = document.createElement('div');
    stage.style.cssText = `position: absolute; left: 0; top: 0; width: ${size.width ?? 400}px;`
        + `${size.height ? ` height: ${size.height}px;` : ''} font: 16px/20px sans-serif;`;
    stage.innerHTML = html;
    document.body.append(stage);
    const elements = [...stage.querySelectorAll<HTMLElement & { updateComplete?: Promise<boolean> }>('*')];
    await Promise.all(elements.map(element => element.updateComplete));
    return {
        stage,
        target: stage.querySelector<HTMLElement>('[data-target]') ?? (stage.firstElementChild as HTMLElement),
        all: selector => [...stage.querySelectorAll<HTMLElement>(selector)],
        remove: () => stage.remove(),
    };
}

/** The markup of a layout in a form: a div with the layout's class and the flags as classes, or the element with them as attributes. */
export function layoutOf(form: Form, layout: Layout, flags: string[], style: string, inner: string): string
{
    const styleAttribute = style ? ` style="${style}"` : '';
    if (form === 'class') return `<div class="rl-${layout}${flags.map(flag => ` ${flag}`).join('')}"${styleAttribute}>${inner}</div>`;
    return `<rl-${layout}${flags.map(flag => ` ${flag}`).join('')}${styleAttribute}>${inner}</rl-${layout}>`;
}

export const FORMS: Form[] = ['class', 'element'];

/** Rounded to a hundredth, so a fraction of a pixel isn't a failure. */
export function round(value: number): number
{
    return Math.round(value * 100) / 100;
}
