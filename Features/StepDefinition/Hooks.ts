import {
    Before,
    After,
    setWorldConstructor,
    World,
    setDefaultTimeout
} from '@cucumber/cucumber';
console.log("HOOKS FILE LOADED");

import dotenv from 'dotenv';

dotenv.config({ path: './.env' });

console.log('ORANGEHRM URL:', process.env.ORANGEHRM_BASE_URL);

import { chromium, Browser, Page } from '@playwright/test';

setDefaultTimeout(30000);

class CustomWorld extends World {
    browser!: Browser;
    page!: Page;
}

setWorldConstructor(CustomWorld);
console.log('HOOKS FILE LOADED');
Before(async function () {
    console.log('BEFORE HOOK EXECUTED');

    this.browser = await chromium.launch({ headless: false });
    const context = await this.browser.newContext();
    this.page = await context.newPage();

    console.log('PAGE CREATED:', !!this.page);
});

After(async function () {

    await this.browser?.close();

    console.log('Browser closed');
});
console.log('HOOKS FILE LOADED');