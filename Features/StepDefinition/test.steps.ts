import { Given, When, Then } from '@cucumber/cucumber';

Given('user launches the application', function () {
    console.log('Application launched');
});

When('user enters username', function () {
    console.log('Username entered');
});

When('user enters password', function () {
    console.log('Password entered');
});

Then('user should see the home page', function () {
    console.log('Home page displayed');
});