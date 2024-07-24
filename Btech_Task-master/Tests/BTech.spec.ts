import { test, Browser, Page } from '@playwright/test'
import { firefox, chromium, webkit } from 'playwright'
import { BTech_Login } from '../Pages/BTech_Login';
import * as fs from 'fs';



const URL = 'https://btech.com/en/customer/account/email/';
let btech_login: BTech_Login;


test('login test', async () => {
    const rawData = fs.readFileSync('data.json');
    const testData = JSON.parse(rawData.toString());

    const { username_Btech, password_Btech } = testData;

    const browser: Browser = await firefox.launch({ headless: false });
    const page: Page = await browser.newPage();

    btech_login = new BTech_Login(page);


    await page.goto(URL);
    await btech_login.login(username_Btech, password_Btech);
    await btech_login.assertPageTitle;
    await page.screenshot({ path: 'screenshot.png' });


});