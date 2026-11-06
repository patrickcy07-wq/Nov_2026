
import { When, Then } from '@cucumber/cucumber';
import { PIMPage } from '../../e2e/pages/PIMPage';

let pimPage: PIMPage;

// Click PIM tab
When('I click on PIM tab', async function () {

    pimPage = new PIMPage(this.page);

    await pimPage.clickPIMTab();

});

// Click Employee List
When('I click on Employee List', async function () {

    await pimPage.clickEmployeeList();

});

// Search employees using different names and IDs
When(
    'I search employee using name {string} and ID {string}',
    async function (name: string, id: string) {

        // Reset previous search filters
        await pimPage.clickResetButton();

        // Enter Employee Name
        if (name !== '') {
            await pimPage.enterEmployeeName(name);
        }

        // Enter Employee ID
        if (id !== '') {
            await pimPage.enterEmployeeId(id);
        }

        // Click Search
        await pimPage.clickSearchButton();

        console.log('Employee search completed');
    }
);

// Verify and print employee records
Then('employee records should be displayed', async function () {

    await pimPage.printEmployeeRecords();

});
