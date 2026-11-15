import { playwright } from '@vitest/browser-playwright';
import { defineConfig } from 'vitest/config';

// The tests run in a real browser, headless, and test what the build made: run `npm run build` first.
//
// RELAYOUT_BROWSER picks the browser: `chromium` (the default), `firefox` or `webkit`. CI runs all three, one after
// the other, in the job that builds. Chromium is the Google Chrome on the machine, which GitHub's Ubuntu runners
// have; on a machine without it, `npx playwright install chromium` and take `channel` out. Firefox and WebKit are
// Playwright's own builds: `npx playwright install firefox webkit`. WebKit is the engine of Safari.
const BROWSERS = ['chromium', 'firefox', 'webkit'] as const;
type Browser = (typeof BROWSERS)[number];

const requested = process.env.RELAYOUT_BROWSER ?? 'chromium';
if (!BROWSERS.includes(requested as Browser))
{
    throw new Error(`RELAYOUT_BROWSER is '${requested}', and has to be one of: ${BROWSERS.join(', ')}`);
}
const browser = requested as Browser;

export default defineConfig({
    test: {
        include: ['test/**/*.test.ts'],
        browser: {
            enabled: true,
            provider: playwright(browser === 'chromium' ? { launchOptions: { channel: 'chrome' } } : {}),
            headless: true,
            screenshotFailures: false,
            instances: [{ browser }],
        },
    },
});
