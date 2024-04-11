const {AuthorizationPage} = require('../pages/AuthorizationPage.js')
const {Browser, Builder} = require('selenium-webdriver')
const {URL} = require("../consts.js")
const fs = require('fs');

let rawdata = fs.readFileSync('tests/testData.json');
let testData = JSON.parse(rawdata);

describe('Тесты страницы авторизации', () => {
    let driver = new Builder().forBrowser(Browser.CHROME).build();
    let authPage;
    beforeAll(async () => {
        return authPage = await new AuthorizationPage(driver, URL);
    });
    afterAll(async () => {
        await driver.quit()
    });
    test('Переход на страницу авторизации', async () => {
        const expected = true
        authPage.openSite()
        const result = await authPage.goToAuthPage(testData)

        expect(result).toBe(expected)
    });
    test('Ввод e-mail', async () => {
        const expected = true

        const result = await authPage.setEmail(testData)

        expect(result).toBe(expected)
    });
    test('Ввод пароля', async () => {
        const expected = true

        const result = await authPage.setPassword(testData)

        expect(result).toBe(expected)
    });
    test('Отправка данных', async () => {
        const expected = true

        const result = await authPage.pushConfButton(testData)

        expect(result).toBe(expected)
    });
    test('Проверка авторизации', async () => {
        const expected = true

        const result = await authPage.isAuthorized(testData)

        expect(result).toBe(expected)
    });

});
describe('Тесты страницы авторизации(негативные)', () => {
    let driver = new Builder().forBrowser(Browser.CHROME).build();
    let authPage;
    beforeAll(async () => {
        return authPage = await new AuthorizationPage(driver, URL);
    });
    afterAll(async () => {
        await driver.quit()
    });
    test('Переход на страницу авторизации', async () => {
        const expected = true
        authPage.openSite()
        const result = await authPage.goToAuthPage(testData)

        expect(result).toBe(expected)
    });

    test('Ввод e-mail', async () => {
        const expected = true
        const testData={authiPage:{setEmail:{method:"id",name:"Email",data:"negativepong@yandex.ru"}}}
        const result = await authPage.setEmail(testData)
        expect(result).toBe(expected)
    });

    test('Ввод пароля', async () => {
        const expected = true

        const result = await authPage.setPassword(testData)

        expect(result).toBe(expected)
    });
    test('Отправка данных', async () => {
        const expected = true

        const result = await authPage.pushConfButton(testData)

        expect(result).toBe(expected)
    });
    test('Проверка авторизации', async () => {
        const expected = false

        const result = await authPage.isAuthorized(testData)

        expect(result).toBe(expected)
    });

});