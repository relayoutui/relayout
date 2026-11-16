// What the tests that measure layout share: a stage to put markup in, and the markup of a layout in each of its forms.
//
// The forms are where a class is written: on a div in the page (`class`), on an <rl-div> in the page (`element`), and
// on an <rl-div> inside another component's shadow root, where the page's relayout.css doesn't reach (`shadow`). The
// markup of the element forms is the same, and only where it goes differs.

export type Form = 'class' | 'element' | 'shadow';
export type Layout = 'column' | 'row' | 'grid' | 'frame';

export const FORMS: Form[] = ['class', 'element', 'shadow'];

/** The forms in the page, for what a page's own style sheet does: it doesn't reach inside a shadow root. */
export const PAGE_FORMS: Form[] = ['class', 'element'];

export interface Mounted
{
    stage: HTMLElement;
    /** The element marked `data-target`, or the first element of the markup. */
    target: HTMLElement;
    /** Every element of the markup that matches. */
    all: (selector: string) => HTMLElement[];
    remove: () => void;
}

interface Options
{
    width?: number;
    height?: number;
    /** `shadow` puts the markup in the shadow root of a component, and the other forms in the page. */
    form?: Form;
    /** The component's own style sheet, for the `shadow` form. */
    componentCss?: string;
}

/** Puts the markup in a stage, or in a component's shadow root on the stage, and waits for the elements in it to render. */
export async function mount(html: string, options: Options = {}): Promise<Mounted>
{
    const stage = document.createElement('div');
    stage.style.cssText = `position: absolute; left: 0; top: 0; width: ${options.width ?? 400}px;`
        + `${options.height ? ` height: ${options.height}px;` : ''} font: 16px/20px sans-serif;`;

    let root: ParentNode = stage;
    if (options.form === 'shadow')
    {
        // As tall as the stage, which is the parent of the markup in the page, for a height of 100% in it
        const component = document.createElement('div');
        component.style.height = '100%';
        const shadow = component.attachShadow({ mode: 'open' });
        shadow.innerHTML = `${options.componentCss ? `<style>${options.componentCss}</style>` : ''}${html}`;
        stage.append(component);
        root = shadow;
    }
    else
    {
        stage.innerHTML = html;
    }
    document.body.append(stage);

    const elements = [...root.querySelectorAll<HTMLElement & { updateComplete?: Promise<boolean> }>('*')];
    await Promise.all(elements.map(element => element.updateComplete));
    const first = [...root.children].find(element => element.localName !== 'style') as HTMLElement;
    return {
        stage,
        target: root.querySelector<HTMLElement>('[data-target]') ?? first,
        all: selector => [...root.querySelectorAll<HTMLElement>(selector)],
        remove: () => stage.remove(),
    };
}

/** The tag of a box with classes in the form: a div in the class form, an <rl-div> in the others. */
export function tagOf(form: Form): string
{
    return form === 'class' ? 'div' : 'rl-div';
}

/** A box with the classes in the form, with any other attributes, around the inner markup. */
export function boxOf(form: Form, classes: string, attributes: string, inner: string): string
{
    const tag = tagOf(form);
    return `<${tag}${classes ? ` class="${classes}"` : ''}${attributes ? ` ${attributes}` : ''}>${inner}</${tag}>`;
}

/** The markup of a layout in a form, with the utilities as classes beside the layout's. */
export function layoutOf(form: Form, layout: Layout, utilities: string[], style: string, inner: string): string
{
    return boxOf(form, [`rl-${layout}`, ...utilities].join(' '), style ? `style="${style}"` : '', inner);
}

/** Rounded to a hundredth, so a fraction of a pixel isn't a failure. */
export function round(value: number): number
{
    return Math.round(value * 100) / 100;
}
