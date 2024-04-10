const {RegisterPage} = require('../pages/RegisterPage.js')
const {Browser, Builder} = require('selenium-webdriver')
const {URL} = require("../consts.js")
describe('Register Page tests', () => {
    let driver = new Builder().forBrowser(Browser.CHROME).build();
    let regPage;
    beforeAll(async () => {
        return regPage = await new RegisterPage(driver, URL);
    });
    afterAll(async () => {
        await driver.quit()
    });
    test('Переход на страницу регистрации', async () => {
        const expected = true
        regPage.openSite()
        const result = await regPage.goToRegPage()

        expect(result).toBe(expected)
    });
    test('Ввод radioButton', async () => {
        const expected = true

        const result = await regPage.setRadio()

        expect(result).toBe(expected)
    });
    test('Ввод имени', async () => {
        const expected = true

        const result = await regPage.setFName()

        expect(result).toBe(expected)
    });
    test('Ввод фамилии', async () => {
        const expected = true

        const result = await regPage.setLName()

        expect(result).toBe(expected)
    });
    test('Ввод e-mail', async () => {
        const expected = true

        const result = await regPage.setEmail()

        expect(result).toBe(expected)
    });
    test('Ввод пароля', async () => {
        const expected = true

        const result = await regPage.setPassword()

        expect(result).toBe(expected)
    });
    test('Подтверждение пароля', async () => {
        const expected = true

        const result = await regPage.setPasswordConfirm()

        expect(result).toBe(expected)
    });
    test('Отправка данных', async () => {
        const expected = true

        const result = await regPage.pushConfButton()

        expect(result).toBe(expected)
    });
    test('Проверка регистрации', async () => {
            const expected = true

            const result = await regPage.isRegistered()

            expect(result).toBe(expected)
    });
});