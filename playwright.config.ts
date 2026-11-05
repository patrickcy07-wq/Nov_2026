
import { defineConfig, devices } from '@playwright/test';
import 'dotenv/config';

export default defineConfig({
    testDir: './tests',

    projects: [
        {
            name: 'chromium',
            use: {
                ...devices['Desktop Chrome'],
            },
        },
    ],
});
