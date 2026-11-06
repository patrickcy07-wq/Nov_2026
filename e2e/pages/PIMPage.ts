
import { Page, Locator } from '@playwright/test';
import { BasePage } from '../Utility/BasePage';

export class PIMPage {

    private basePage: BasePage;

    // Locators
    private pimTab: Locator;
    private employeeList: Locator;

    private employeeName: Locator;
    private employeeId: Locator;
    private employmentStatus: Locator;
    private include: Locator;
    private supervisorName: Locator;
    private jobTitle: Locator;
    private subUnit: Locator;

    private searchButton: Locator;
    private resetButton: Locator;
    

    constructor(private page: Page) {

        this.basePage = new BasePage(page);

        // Navigation
        this.pimTab = page.getByRole('link', { name: 'PIM' });

        this.employeeList = page.getByRole('link', {
            name: 'Employee List'
        });

        // Search fields
        this.employeeName = page.getByPlaceholder('Type for hints...').nth(0);

        this.employeeId = page.locator(
            '//label[normalize-space()="Employee Id"]/ancestor::div[contains(@class,"oxd-input-group")]//input'
        );

        this.employmentStatus = page.locator(
            '//label[normalize-space()="Employment Status"]/ancestor::div[contains(@class,"oxd-input-group")]//div[contains(@class,"oxd-select-text-input")]'
        );

        this.include = page.locator(
            '//label[normalize-space()="Include"]/ancestor::div[contains(@class,"oxd-input-group")]//div[contains(@class,"oxd-select-text-input")]'
        );

        this.supervisorName = page.getByPlaceholder('Type for hints...').nth(1);

        this.jobTitle = page.locator(
            '//label[normalize-space()="Job Title"]/ancestor::div[contains(@class,"oxd-input-group")]//div[contains(@class,"oxd-select-text-input")]'
        );

        this.subUnit = page.locator(
            '//label[normalize-space()="Sub Unit"]/ancestor::div[contains(@class,"oxd-input-group")]//div[contains(@class,"oxd-select-text-input")]'
        );

        // Buttons
        this.searchButton = page.getByRole('button', {
            name: 'Search'
        });

        this.resetButton = page.getByRole('button', {
            name: 'Reset'

        });
        this.resetButton = page.getByRole('button', {
    name: 'Reset'
});


       
    }

    // Navigation methods

    async clickPIMTab() {
        await this.basePage.click(this.pimTab);
    }

 

    // Search methods

    async enterEmployeeName(value: string) {
        await this.basePage.fill(this.employeeName, value);
    }

    async enterEmployeeId(value: string) {
        await this.basePage.fill(this.employeeId, value);
    }

    async enterSupervisorName(value: string) {
        await this.basePage.fill(this.supervisorName, value);
    }

    async selectDropdown(locator: Locator, value: string) {

        await this.basePage.click(locator);

        await this.page.getByRole('option', {
            name: value,
            exact: true
        }).click();
    }

    async selectEmploymentStatus(value: string) {
        await this.selectDropdown(this.employmentStatus, value);
    }

    async selectInclude(value: string) {
        await this.selectDropdown(this.include, value);
    }

    async selectJobTitle(value: string) {
        await this.selectDropdown(this.jobTitle, value);
    }

    async selectSubUnit(value: string) {
        await this.selectDropdown(this.subUnit, value);
    }

    async clickSearchButton() {
        await this.basePage.click(this.searchButton);
    }

    async clickResetButton() {
        await this.basePage.click(this.resetButton);
    }
    
     async clickEmployeeList() {

    const employeeList = this.page.getByRole('link', {
        name: 'Employee List'
    });

    await this.basePage.click(employeeList);
}






    // Print employee records

    async printEmployeeRecords() {

        const rows = this.page.locator(
            '.oxd-table-body .oxd-table-row'
        );

        await this.page.waitForSelector('.oxd-table-body');

        const count = await rows.count();

        console.log('Total Employee Records:', count);

        for (let i = 0; i < count; i++) {

            const record = await rows.nth(i).innerText();

            console.log(record);

        }
    }
}
