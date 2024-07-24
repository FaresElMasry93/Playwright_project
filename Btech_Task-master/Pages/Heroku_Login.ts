
import { expect, type Locator, type Page } from '@playwright/test';



export class Heroku_Login {

    readonly page: Page;
    // readonly loginButton :Locator;
    readonly pageTitle: RegExp;
    readonly pageTitleNegative: RegExp;
    private loginButton = 'button[type="submit"]';

    constructor(page: Page) {
        this.page = page;
        this.pageTitle = /Secure Area/;
        this.pageTitleNegative = /Your username is invalid!/;
    }


    async enterUsername(username: string): Promise<void> {
        await this.page.fill('#username', username);
    }




    async enterPassword(password: string): Promise<void> {
        await this.page.fill('#password', password);


    }



    async clickLoginButton(): Promise<void> {
        await this.page.click(this.loginButton);
    }



    async login(username: string, password: string): Promise<void> {
        await this.enterUsername(username);
        await this.enterPassword(password);
        await this.clickLoginButton();

    }



    async assertPageTitle() {
        await expect(this.page).toHaveTitle(this.pageTitle);
        console.log('Page title assertion passed successfully.');
    }
    
    async assertPageTitleNegative() {
        await expect(this.page).toHaveTitle(this.pageTitle);
        console.log('Page title assertion passed successfully.');
    }


}

export default Heroku_Login;