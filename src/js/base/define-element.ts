/**
 * Registers a class as a custom element, unless the name is already taken.
 *
 * A page can load the script twice: two versions of Relayout, or two apps that each bring their own. The first
 * copy registers the elements and the second leaves them as they are, where `customElements.define` would throw.
 */
export function defineElement(name: string)
{
    return (element: CustomElementConstructor): void =>
    {
        if (!customElements.get(name)) customElements.define(name, element);
    };
}
