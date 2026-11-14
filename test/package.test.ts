import { describe, expect, it } from 'vitest';
import script from '../dist/js/relayout.js?raw';
import bundle from '../dist/js/relayout.bundle.js?raw';
import '../dist/js/relayout.js';

// Lit's own code names its versions on `globalThis`, so the string is in a script that contains Lit
const LIT_INSIDE = 'litHtmlVersions';
const LIT_IMPORTED = /from\s*["']lit["']/;

describe('the package\'s script', () =>
{
    it('imports Lit, which the package depends on, instead of containing it', () =>
    {
        expect(script).toMatch(LIT_IMPORTED);
        expect(script).not.toContain(LIT_INSIDE);
    });

    it('leaves the registered elements as they are when it loads a second time', async () =>
    {
        const registered = customElements.get('rl-row');
        await import('../dist/js/relayout.js?second');
        expect(customElements.get('rl-row')).toBe(registered);
    });

    it('can share a page with the bundled script', async () =>
    {
        const registered = customElements.get('rl-row');
        await import('../dist/js/relayout.bundle.js');
        expect(customElements.get('rl-row')).toBe(registered);
    });
});

describe('the bundled script', () =>
{
    it('contains Lit and imports nothing', () =>
    {
        expect(bundle).toContain(LIT_INSIDE);
        expect(bundle).not.toMatch(LIT_IMPORTED);
    });
});
