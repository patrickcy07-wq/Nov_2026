
import { Given, When, Then } from '@cucumber/cucumber';
import { LeavePage } from '../../e2e/pages/LeavePage';

let leavePage: LeavePage;

When('I click on Leave tab', async function () {
    leavePage = new LeavePage(this.page);
    await leavePage.clickLeaveTab();
});

When('I click on Leave List', async function () {
    await leavePage.clickLeaveList();
});

When('I enter From Date {string}', async function (fromDate: string) {
    await leavePage.enterFromDate(fromDate);
});

When('I enter To Date {string}', async function (toDate: string) {
    await leavePage.enterToDate(toDate);
});

When('I select Leave Type {string}', async function (leaveType: string) {
    await leavePage.selectLeaveType(leaveType);
});

When('I click on Leave Search button', async function () {
    await leavePage.clickSearchButton();
});

Then('leave records should be displayed', async function () {
    await leavePage.printLeaveRecords();
});
