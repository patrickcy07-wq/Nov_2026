
import { Page, Locator } from '@playwright/test';
import { BasePage } from '../Utility/BasePage';

interface HotelSearchData {
    Location: string;
    Hotel: string;
    RoomType: string;
    Rooms: string;
    CheckIn: string;
    CheckOut: string;
    Adults: string;
    Children: string;
}

export class SearchHotelPage extends BasePage {

    private location: Locator;
    private hotel: Locator;
    private roomType: Locator;
    private rooms: Locator;
    private checkIn: Locator;
    private checkOut: Locator;
    private adults: Locator;
    private children: Locator;
    private searchButton: Locator;

    constructor(page: Page) {
        super(page);

        this.location = page.locator('#location');
        this.hotel = page.locator('#hotels');
        this.roomType = page.locator('#room_type');
        this.rooms = page.locator('#room_nos');
        this.checkIn = page.locator('#datepick_in');
        this.checkOut = page.locator('#datepick_out');
        this.adults = page.locator('#adult_room');
        this.children = page.locator('#child_room');
        this.searchButton = page.locator('#Submit');
    }

    // Select Location
    async selectLocation(value: string): Promise<void> {
        console.log('Excel Location:', value);

        await this.selectDropdown(this.location, value);

        const selectedText = await this.location
            .locator('option:checked')
            .innerText();

        console.log('UI Location:', selectedText);
    }

    // Select Hotel
    async selectHotel(value: string): Promise<void> {
        await this.selectDropdown(this.hotel, value);
        console.log('Hotel selected:', value);
    }

    // Select Room Type
    async selectRoomType(value: string): Promise<void> {
        await this.selectDropdown(this.roomType, value);
        console.log('Room type selected:', value);
    }

    // Select Number of Rooms
    async selectRooms(value: string): Promise<void> {
        await this.selectDropdown(this.rooms, value);
        console.log('Rooms selected:', value);
    }

    // Enter Check-in Date
    async enterCheckInDate(value: string): Promise<void> {
        await this.fill(this.checkIn, value);
        console.log('Check-in date entered:', value);
    }

    // Enter Check-out Date
    async enterCheckOutDate(value: string): Promise<void> {
        await this.fill(this.checkOut, value);
        console.log('Check-out date entered:', value);
    }

    // Select Adults
    async selectAdults(value: string): Promise<void> {
        await this.selectDropdown(this.adults, value);
        console.log('Adults selected:', value);
    }

    // Select Children
    async selectChildren(value: string): Promise<void> {
        await this.selectDropdown(this.children, value);
        console.log('Children selected:', value);
    }

    // Click Search
    async clickSearch(): Promise<void> {
        await this.click(this.searchButton);
        await this.page.waitForLoadState('domcontentloaded');
    }

    // Complete Hotel Search
    async searchHotel(data: HotelSearchData): Promise<void> {

        await this.selectLocation(data.Location);
        console.log('Location:', await this.location.inputValue());

        await this.selectHotel(data.Hotel);
        console.log('Hotel:', await this.hotel.inputValue());

        await this.selectRoomType(data.RoomType);
        console.log('Room type:', await this.roomType.inputValue());

        await this.selectRooms(data.Rooms);
        console.log('Rooms:', await this.rooms.inputValue());

        await this.enterCheckInDate(data.CheckIn);
        console.log('Check-in:', await this.checkIn.inputValue());

        await this.enterCheckOutDate(data.CheckOut);
        console.log('Check-out:', await this.checkOut.inputValue());

        await this.selectAdults(data.Adults);
        console.log('Adults:', await this.adults.inputValue());

        await this.selectChildren(data.Children);
        console.log('Children:', await this.children.inputValue());

        // Capture screenshot after filling all fields
        await this.page.screenshot({
            path: 'hotel-form-filled.png',
            fullPage: true
        });

        await this.clickSearch();
    }
}
