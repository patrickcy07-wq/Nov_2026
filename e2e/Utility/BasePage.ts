
import { Page, Locator } from '@playwright/test';

export class BasePage {
    constructor(protected page: Page) {}

    async click(locator: Locator): Promise<void> {
        await locator.click();
    }

    async fill(locator: Locator, value: string): Promise<void> {
        await locator.fill(value);
    }

    async selectDropdown(
        locator: Locator,
        value: string
    ): Promise<void> {
        await locator.selectOption({ label: value });
    }

    async navigate(url: string): Promise<void> {
        await this.page.goto(url);
    }
}
