import { test, expect } from '@playwright/test';


test('Count frames', async ({ page }) => {

    await page.goto('C:/Users/priya/OneDrive/Desktop/July Batch 4/PlaywrightTypescript/html/axesxpath.html');

    await page.locator('//td[text()="Inactive"]//ancestor::div');

    const result=await page.locator('.card').first();

    const text=await result.innerText()

    console.log("class name:",text);

    await page.waitForTimeout(3000);

});
