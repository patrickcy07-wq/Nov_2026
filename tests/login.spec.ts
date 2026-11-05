import { test } from '@playwright/test';
import { Loginpage } from '../e2e/pages/loginpage';




test('Adactin login', async ({ page }) => {
  const loginPage = new Loginpage(page);

    const url = process.env.BASE_URL;
    const username = process.env.APP_USERNAME;
    const password = process.env.APP_PASSWORD;
    

    if (!url || !username || !password) {
        throw new Error('Missing values in .env file');
    }

    await loginPage.navigate(url);
    await loginPage.login(username, password);
});