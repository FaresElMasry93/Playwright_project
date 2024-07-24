import { test, Browser, Page } from '@playwright/test'
import { firefox, chromium, webkit } from 'playwright'
import { BTech_Login } from '../Pages/BTech_Login';
import Heroku_Login from '../Pages/Heroku_Login';
import * as fs from 'fs';



const URL = 'https://the-internet.herokuapp.com/login';



test('Login Test Positive', async () => {
    const rawData = fs.readFileSync('data.json');
    const testData = JSON.parse(rawData.toString());
    const { username_Positive, password_Positive } = testData;

    const browser: Browser = await firefox.launch({ headless: false });
    const page: Page = await browser.newPage();
    let heroku_login = new Heroku_Login(page);

    await page.goto(URL);
    await heroku_login.login('tomsmith', 'SuperSecretPassword!');
    await heroku_login.assertPageTitle;
    await page.screenshot({ path: 'screenshot.png' });


});
test('Login Test Negative', async () => {
    const rawData = fs.readFileSync('data.json');
    const testData = JSON.parse(rawData.toString());
    const { username_Negative, password_Negative } = testData;

    const browser: Browser = await firefox.launch({ headless: false });
    const page: Page = await browser.newPage();
    let heroku_login = new Heroku_Login(page);

    await page.goto(URL);
    await heroku_login.login('TestNegative', 'TestNegative');
    await heroku_login.assertPageTitleNegative;
    await page.screenshot({ path: 'screenshot.png' });


});