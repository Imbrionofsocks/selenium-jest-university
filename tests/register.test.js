const { Builder } = require('selenium-webdriver');
const RegisterPage = require('/pages/RegisterPage');

describe('Register Page tests', () => {
    let driver;
    let homePage;

    beforeAll(async () => {
        driver = await new Builder().forBrowser('chrome').build();
        homePage = new RegisterPage(driver);
    });

    afterAll(async () => {
        await driver.quit();
    });

    test('should open home page and click some element', async () => {
        await homePage.open();
        await homePage.clickSomeElement();
        // Добавьте здесь проверки
    });
});
