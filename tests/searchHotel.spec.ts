
import { test, expect } from '@playwright/test';
import { Loginpage } from '../e2e/pages/loginpage';
import { ExcelReader } from '../e2e/Utility/ExcelReader';

test('Search hotel using Excel data', async ({ page }) => {
    const url = process.env.BASE_URL;
    const username = process.env.APP_USERNAME;
    const password = process.env.APP_PASSWORD;

    if (!url || !username || !password) {
        throw new Error('Missing values in .env file');
    }

    // Login
    const loginPage = new Loginpage(page);
    await loginPage.navigate(url);
    await loginPage.login(username, password);

    // Read Excel data
    const data = ExcelReader.getRow('Sheet1', 2);
    console.log('Excel data:', data);

    // Select Location
    const location = page.locator('//*[@id="location"]');
    await location.selectOption({ label: String(data['Location']) });
    console.log('Location:', await location.locator('option:checked').innerText());

    // Select Hotel
    const hotel = page.locator('//*[@id="hotels"]');
    await hotel.selectOption({ label: String(data['Hotel']) });
    console.log('Hotel:', await hotel.locator('option:checked').innerText());

    // Select Room Type
    const roomType = page.locator('//*[@id="room_type"]');
    await roomType.selectOption({ label: String(data['RoomType']) });
    console.log('Room Type:', await roomType.locator('option:checked').innerText());

    // Select Number of Rooms
    const rooms = page.locator('//*[@id="room_nos"]');
    await rooms.selectOption(String(data['Rooms']));
    console.log('Rooms:', await rooms.locator('option:checked').innerText());

    // Enter Check-in Date
    const checkIn = page.locator('//*[@id="datepick_in"]');
    await checkIn.fill(String(data['CheckIn']));
    console.log('Check-in:', await checkIn.inputValue());

    // Enter Check-out Date
    const checkOut = page.locator('//*[@id="datepick_out"]');
    await checkOut.fill(String(data['CheckOut']));
    console.log('Check-out:', await checkOut.inputValue());

    // Select Adults
    const adults = page.locator('//*[@id="adult_room"]');
    await adults.selectOption(String(data['Adults']));
    console.log('Adults:', await adults.locator('option:checked').innerText());

    // Select Children
    const children = page.locator('//*[@id="child_room"]');
    await children.selectOption(String(data['Children']));
    console.log('Children:', await children.locator('option:checked').innerText());


    // Click Search
    await page.locator('//*[@id="Submit"]').click();

    // Verify search results page
    await expect(page).toHaveURL(/SelectHotel\.php/i);
    console.log('Hotel search completed successfully');
});
