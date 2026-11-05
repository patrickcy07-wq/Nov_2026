
import { test } from '@playwright/test';
import { Loginpage } from '../e2e/pages/loginpage';


test('has title', async ({ page }) => {
   const loginPage = new Loginpage(page);
await loginPage.navigate(process.env.BASE_URL!);


    await loginPage.login('admin', 'Adijfauf');
   
    
    await loginPage.clickLoginButton();


});
