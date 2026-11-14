import { describe, expect, it } from 'vitest';
// Only the bundled script is loaded here, as on a page with no bundler and no other script
import '../dist/js/relayout.bundle.js';

const TAGS = ['rl-column', 'rl-row', 'rl-grid', 'rl-frame', 'rl-divider', 'rl-div'];

describe('the bundled script', () =>
{
    it.each(TAGS)('registers %s', tag =>
    {
        expect(customElements.get(tag)).toBeDefined();
    });

    it('renders the children of an element in a slot', async () =>
    {
        const row = document.createElement('rl-row') as HTMLElement & { updateComplete: Promise<boolean> };
        row.append(document.createElement('span'));
        document.body.append(row);
        await row.updateComplete;
        expect(row.shadowRoot?.querySelector('slot')).not.toBeNull();
        row.remove();
    });

    it('leaves the registered elements as they are when the script loads a second time', async () =>
    {
        const registered = TAGS.map(tag => customElements.get(tag));
        await import('../dist/js/relayout.bundle.js?second');
        expect(TAGS.map(tag => customElements.get(tag))).toEqual(registered);
    });
});
