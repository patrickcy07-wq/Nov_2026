
import { Page, Locator } from '@playwright/test';
import { BasePage } from '../Utility/BasePage';

export class LeavePage {

    private basePage: BasePage;

    // Locators
    private leaveTab: Locator;
    private leaveList: Locator;
    private fromDate: Locator;
    private toDate: Locator;
    private leaveType: Locator;
    private searchButton: Locator;

    constructor(private page: Page) {

        this.basePage = new BasePage(page);

        this.leaveTab = page.getByRole('link', { name: 'Leave' });

        this.leaveList = page.getByRole('link', { name: 'Leave List' });

        this.fromDate = page.locator(
            '//label[text()="From Date"]/../following-sibling::div//input'
        );

        this.toDate = page.locator(
            '//label[text()="To Date"]/../following-sibling::div//input'
        );

        this.leaveType = page.locator(
    '//label[text()="Leave Type"]/../following-sibling::div//div[contains(@class,"oxd-select-text-input")]'
);

        this.searchButton = page.getByRole('button', { name: 'Search' });
    }

    async clickLeaveTab() {
        await this.basePage.click(this.leaveTab);
    }

    async clickLeaveList() {
        await this.basePage.click(this.leaveList);
    }

    async enterFromDate(value: string) {
        await this.fromDate.fill(value);
    }

    async enterToDate(value: string) {
        await this.toDate.fill(value);
    }

    async selectLeaveType(value: string) {

    await this.basePage.click(this.leaveType);

    await this.page.getByRole('option', {
        name: value,
        exact: true
    }).click();
}

    async clickSearchButton() {
        await this.basePage.click(this.searchButton);
    }

    async printLeaveRecords() {
        const rows = this.page.locator(
            '.oxd-table-body .oxd-table-row'
        );

        await rows.first().waitFor({ state: 'visible', timeout: 10000 })
            .catch(() => {});

        const count = await rows.count();

        console.log('Total Leave Records:', count);

        for (let i = 0; i < count; i++) {
            console.log(await rows.nth(i).innerText());
        }
    }
}
