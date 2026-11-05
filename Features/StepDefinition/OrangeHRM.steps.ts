
import { Given, When, Then } from '@cucumber/cucumber';
import { BasePage } from '../../e2e/Utility/BasePage';
import { Page } from '@playwright/test';
import { RecruitmentPage } from '../../e2e/pages/RecruitmentPage';

let recruitmentPage: RecruitmentPage;


let basePage: BasePage;
console.log("ORANGEHRM STEPS LOADED");
console.log("URL:", process.env.ORANGEHRM_BASE_URL);
console.log("USERNAME:", process.env.ORANGEHRM_USERNAME);


When('I enter valid username and password', async function () {

    await basePage.fill(
        this.page.getByPlaceholder('Username'),
        process.env.ORANGEHRM_USERNAME!
    );

    await basePage.fill(
        this.page.getByPlaceholder('Password'),
        process.env.ORANGEHRM_PASSWORD!
    );

});

When('I click on the login button', async function () {

    await basePage.click(
        this.page.getByRole('button', { name: 'Login' })
    );

});


Given('I am on the OrangeHRM login page', async function () {
    basePage = new BasePage(this.page);

    await basePage.navigate(process.env.ORANGEHRM_BASE_URL!);
});

When('I click on Recruitment tab', async function () {

    recruitmentPage = new RecruitmentPage(this.page);

    await recruitmentPage.clickRecruitmentTab();

});


When(
    'I search candidate using {string} and {string} and {string}',
    async function (vacancy: string, candidateName: string, hiringManager: string) {

        await recruitmentPage.selectVacancy(vacancy);

        await recruitmentPage.enterCandidateName(candidateName);

        //   await recruitmentPage.selectHiringManager(hiringManager);
    }
);




When('I click on Search button', async function () {
    await recruitmentPage.clickSearchButton();
    await this.page.waitForTimeout(2000);
    await recruitmentPage.printSearchResults();
});

Then('matching candidate records should be displayed', async function () {

    const rows = this.page.locator('.oxd-table-body .oxd-table-row');

    await this.page.waitForSelector('.oxd-table-body');

    const count = await rows.count();

    console.log('Search completed. Total records:', count);

});