import { playwright } from '@vitest/browser-playwright';
import { defineConfig } from 'vitest/config';

// The tests run in the Google Chrome on the machine, headless, and test what the build made: run `npm run build`
// first. Chrome comes with GitHub's Ubuntu runners; on a machine without it, `npx playwright install chromium` and
// take `channel` out.
export default defineConfig({
    test: {
        include: ['test/**/*.test.ts'],
        browser: {
            enabled: true,
            provider: playwright({ launchOptions: { channel: 'chrome' } }),
            headless: true,
            screenshotFailures: false,
            instances: [{ browser: 'chromium' }],
        },
    },
});
