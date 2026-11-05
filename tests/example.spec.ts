import { test, expect } from '@playwright/test';

test('Open Google in Firefox', async ({ page }) => {



 //url
    await page.goto("https://www.saucedemo.com/");


await page.getByRole('textbox', { name: 'Username' }).fill('asdas');


    //title
    await expect(page).toHaveTitle('Swag Labs');

    // mannual wait
    await page.waitForTimeout(2000);

    await page.goto("https://testautomationpractice.blogspot.com/");

    // mannual wait
    await page.waitForTimeout(2000);

    await page.goto("https://www.facebook.com/login.php");

    // mannual wait
    await page.waitForTimeout(2000);

    //backward
    await page.goBack();

    // mannual wait
    await page.waitForTimeout(2000);

    //backward
    await page.goBack();

    // mannual wait
    await page.waitForTimeout(2000);

    //reload
    await page.reload();

    // mannual wait
    await page.waitForTimeout(2000);

    //Forward
    await page.goForward();

    // mannual wait
    await page.waitForTimeout(2000);

    //title
    const pageTitle=await page.title();

    console.log("the page title is:",pageTitle);

    //url
    const pageurl=await page.url();

    console.log("the page url is:",pageurl);

    //page source

    const pagesource=await page.content();

    console.log("page source:",pagesource);

    //mannual wait
    await page.waitForTimeout(2000);


})
