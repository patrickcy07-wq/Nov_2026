
import { Page, Locator } from '@playwright/test';
import { BasePage } from '../Utility/BasePage';


export class Loginpage extends BasePage {
    private username: Locator;
    private password: Locator;
    private loginButton: Locator;

    constructor(page: Page) {
        super(page);
        this.username = page.locator('#username');
        this.password = page.locator('#password');
        this.loginButton = page.locator('#login');
    }

    async login(username: string, password: string): Promise<void> {
        await this.fill(this.username, username);
        await this.fill(this.password, password);
        await this.click(this.loginButton);
    }
        async clickLoginButton() {
    await this.click(this.loginButton);

}
    async enterUsername(value: string) {
    await this.fill(this.username, value);
}

async enterPassword(value: string) {
    await this.fill(this.password, value);
}

async clickLogin() {
    await this.click(this.loginButton);
}


    }

   


