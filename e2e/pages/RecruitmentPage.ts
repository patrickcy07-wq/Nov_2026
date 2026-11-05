import { Page, Locator } from '@playwright/test';
import { BasePage } from '../Utility/BasePage';

export class RecruitmentPage {

    private basePage: BasePage;

    private recruitmentTab: Locator;
    private vacancy: Locator;
    private candidateName: Locator;
    private hiringManager: Locator;
    private searchButton: Locator;

    constructor(private page: Page) {

        this.basePage = new BasePage(page);

        this.recruitmentTab = page.getByRole('link', { name: 'Recruitment' });

        this.vacancy = page.locator('.oxd-select-text').nth(1);

        
        this.hiringManager = page.locator('(//div[contains(@class,"oxd-select-text")])[3]');

        this.candidateName = page.getByPlaceholder('Type for hints...');

        this.searchButton = page.getByRole('button', { name: 'Search' });
    }

    async clickRecruitmentTab() {
        await this.basePage.click(this.recruitmentTab);
    }

    async selectVacancy(value: string) {

    await this.basePage.click(this.vacancy);

    await this.basePage.click(
        this.page.getByRole('listbox').getByText(value, { exact: true })
    );


    


}

async enterCandidateName(value: string) {

    await this.basePage.fill(this.candidateName, value);

    await this.page.waitForTimeout(2000);

}

async selectHiringManager(value: string) {

    await this.basePage.click(this.hiringManager);

    await this.basePage.click(
        this.page.getByRole('listbox').getByText(value, { exact: true })
    );

}


    async clickSearchButton() {
        await this.basePage.click(this.searchButton);
    }

    async printSearchResults() {

    const rows = this.page.locator('.oxd-table-body .oxd-table-row');

    const count = await rows.count();

    console.log('Total search results:', count);

    for (let i = 0; i < count; i++) {
        console.log(await rows.nth(i).innerText());
    }

}
}