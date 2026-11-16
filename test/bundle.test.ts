import { describe, expect, it } from 'vitest';
// Only the bundled script is loaded here, as on a page with no bundler and no other script
import '../dist/js/relayout.bundle.js';

describe('the bundled script', () =>
{
    it('registers rl-div', () =>
    {
        expect(customElements.get('rl-div')).toBeDefined();
    });

    it('renders the children of the element in a slot', async () =>
    {
        const div = document.createElement('rl-div');
        div.append(document.createElement('span'));
        document.body.append(div);
        await div.updateComplete;
        expect(div.shadowRoot?.querySelector('slot')).not.toBeNull();
        div.remove();
    });

    it('leaves the registered element as it is when the script loads a second time', async () =>
    {
        const registered = customElements.get('rl-div');
        await import('../dist/js/relayout.bundle.js?second');
        expect(customElements.get('rl-div')).toBe(registered);
    });
});
