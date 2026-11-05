
import { test, expect } from '@playwright/test';

test('Flipkart watches and prices', async ({ page }) => {

    test.setTimeout(60000);

    const brand = 'Casio';
    const pageNumber = 7; // Change to any page number

    await page.goto('https://www.flipkart.com/ss-26-men-b-at-store?pageUID=1792478069960/');

    await page.getByText('Fashion', { exact: true }).click();
    await page.waitForTimeout(3000);

    await page.getByText('Watches', { exact: true }).click();
    await page.waitForTimeout(3000);

    await page.locator('img[src*="5b43036fd86b2a8c"]').click();
    await page.waitForTimeout(3000);

    // Hover over Men
    await page.getByText('Men', { exact: true }).first().hover();
    await page.waitForTimeout(1000);

    // Select brand
    await page.locator(`a[title="${brand}"]`).click();
    await page.waitForLoadState('domcontentloaded');

    // Navigate to selected page
    if (pageNumber > 3) {
        await page.getByRole('link', {
            name: String(pageNumber),
            exact: true
        }).click();

        await page.waitForLoadState('domcontentloaded');
    }

    await page.waitForTimeout(2000);

    // Find products
    const products = page.locator('div[data-id]');
    const count = await products.count();

    console.log(`Brand: ${brand}`);
    console.log(`Page: ${pageNumber}`);
    console.log('Total product cards:', count);
    console.log('Model names and prices:');

    for (let i = 0; i < count; i++) {
        const details = await products.nth(i).evaluate(el => {
            const model =
                el.querySelector('a[title]')?.getAttribute('title') ||
                el.querySelector('a')?.innerText.trim() ||
                null;

            const price = Array.from(el.querySelectorAll('*'))
                .map(element => element.textContent?.trim() || '')
                .find(text => /^₹[\d,]+$/.test(text)) || null;

            return { model, price };
        });

        if (details.model && details.price) {
            console.log(`${details.model} - ${details.price}`);
        }
    }
});
