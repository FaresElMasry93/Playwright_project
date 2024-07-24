
import { expect, type Locator, type Page } from '@playwright/test';



export class BTech_Login {

    readonly page: Page;
    readonly pageTitle: RegExp;
    private readonly inputSelector: string = '#password';
  
    constructor(page: Page) {
            this.page = page;
            this.pageTitle = /My Account/;
      }


  async enterEmail(email: string): Promise<void> {
    await this.page.fill('#email', email);
  }



  async enterPassword(password: string): Promise<void> {

    await this.page.evaluate((selector) => {
        const input = document.querySelector(selector);
        if (input) {
            input.removeAttribute('readonly');
        }
    }, this.inputSelector);
    
    await this.page.focus(this.inputSelector);
    await this.page.fill(this.inputSelector, password);

    await this.page.evaluate((selector) => {
        const input = document.querySelector(selector);
        if (input) {
            input.setAttribute('readonly', 'readonly');
        }
    }, this.inputSelector);
    await this.page.waitForTimeout(4000);
      
  }



  async clickLoginButton(): Promise<void> {
   
    await this.page.keyboard.press('Enter');
    await this.page.waitForTimeout(10000);
  }



  async login(email: string, password: string): Promise<void> {
    await this.enterEmail(email);
    await this.enterPassword(password);
    await this.clickLoginButton();
    
  }



    async assertPageTitle() {
        await expect(this.page).toHaveTitle(this.pageTitle);
        console.log('Page title assertion passed successfully.');
    }


}

export default BTech_Login;