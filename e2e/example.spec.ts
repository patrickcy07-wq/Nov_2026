import { test, expect } from '@playwright/test';

test('Login to SauceDemo using basic selectors', async ({ page }) => {

    // Launch application
    await page.goto('https://www.saucedemo.com/');

    // Locate Username and enter value
    await page.locator('#user-name').fill('standard_user');

    // Locate Password and enter value
    await page.locator('#password').fill('secret_sauce');

    // Locate Login button and click
    await page.locator('#login-button').click();

    // Verify successful login
    await expect(page).toHaveURL(/inventory.html/);

    console.log('Login successful');
});