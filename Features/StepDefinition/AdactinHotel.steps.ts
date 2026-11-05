
import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';

import { Loginpage } from '../../e2e/pages/loginpage';
import { SearchHotelPage } from '../../e2e/pages/SearchHotelPage';
import { ExcelReader } from '../../e2e/Utility/ExcelReader';
console.log("STEP DEFINITION FILE LOADED");

// 1. Launch application
Given('User launches the Adactin application', async function () {

    console.log('Page available:', !!this.page);

    await this.page.goto(process.env.BASE_URL!);

});

// 2. Enter username and password
When('User enters valid username and password', async function () {

    const loginPage = new Loginpage(this.page);

    await loginPage.enterUsername(process.env.APP_USERNAME!);
    await loginPage.enterPassword(process.env.APP_PASSWORD!);

    console.log('Username and password entered');
});


// 3. Click Login button
When('User clicks on the Login button', async function () {

    const loginPage = new Loginpage(this.page);

    await loginPage.clickLogin();

    console.log('Login button clicked');
});


// 4. Verify Search Hotel page
Then('User should navigate to the Search Hotel page', async function () {

    await expect(this.page).toHaveURL(/SearchHotel/i);

    console.log('Login successful');
});

When('User enters hotel search details from Excel', async function () {

    const searchPage = new SearchHotelPage(this.page);

    // Read Excel data
    const data: Record<string, any> = ExcelReader.getRow('Sheet1', 2);

    console.log('Excel test data:', data);

    // Pass Excel values to UI
    await searchPage.selectLocation(String(data['Location']));
    await searchPage.selectHotel(String(data['Hotel']));
    await searchPage.selectRoomType(String(data['RoomType']));
    await searchPage.selectRooms(String(data['Rooms']));

    await searchPage.enterCheckInDate(String(data['CheckIn']));
    await searchPage.enterCheckOutDate(String(data['CheckOut']));

    await searchPage.selectAdults(String(data['Adults']));
    await searchPage.selectChildren(String(data['Children']));

    console.log('All Excel data entered successfully');
});

// Verify all hotel search details
Then('All hotel search details should be populated', async function () {

    const data: Record<string, any> = ExcelReader.getRow('Sheet1', 2);

    await expect(this.page.locator('#location'))
        .toHaveValue(String(data['Location']));

    await expect(this.page.locator('#hotels'))
        .toHaveValue(String(data['Hotel']));

    await expect(this.page.locator('#room_type'))
        .toHaveValue(String(data['RoomType']));

    await expect(this.page.locator('#room_nos'))
        .toHaveValue(String(data['Rooms']));

    await expect(this.page.locator('#datepick_in'))
        .toHaveValue(String(data['CheckIn']));

    await expect(this.page.locator('#datepick_out'))
        .toHaveValue(String(data['CheckOut']));

    await expect(this.page.locator('#adult_room'))
        .toHaveValue(String(data['Adults']));

    await expect(this.page.locator('#child_room'))
        .toHaveValue(String(data['Children']));

    console.log('All hotel search details verified successfully');
});



When('User clicks on the Search button', async function () {

    const searchPage = new SearchHotelPage(this.page);

    await searchPage.clickSearch();

    console.log('Search button clicked');
});

Then('User should navigate to the Select Hotel page', async function () {

    await expect(this.page).toHaveURL(/SelectHotel/i);

    console.log('Select Hotel page displayed');
});