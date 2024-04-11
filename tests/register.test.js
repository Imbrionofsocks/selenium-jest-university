const {RegisterPage} = require('../pages/RegisterPage.js')
const {Browser, Builder} = require('selenium-webdriver')
const {URL} = require("../consts.js")
const fs = require('fs');

let rawdata = fs.readFileSync('tests/testData.json');
let testData = JSON.parse(rawdata);
testData.regiPage.setEmail.data = `pingpong${Date.now()}@yandex.ru`

describe('Тесты страницы регистрации', () => {
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
        const result = await regPage.goToRegPage(testData)

        expect(result).toBe(expected)
    });
    test('Ввод radioButton', async () => {
        const expected = true

        const result = await regPage.setRadio(testData)

        expect(result).toBe(expected)
    });
    test('Ввод имени', async () => {
        const expected = true

        const result = await regPage.setFName(testData)

        expect(result).toBe(expected)
    });
    test('Ввод фамилии', async () => {
        const expected = true

        const result = await regPage.setLName(testData)

        expect(result).toBe(expected)
    });
    test('Ввод e-mail', async () => {
        const expected = true

        const result = await regPage.setEmail(testData)

        expect(result).toBe(expected)
    });
    test('Ввод пароля', async () => {
        const expected = true

        const result = await regPage.setPassword(testData)

        expect(result).toBe(expected)
    });
    test('Подтверждение пароля', async () => {
        const expected = true

        const result = await regPage.setPasswordConfirm(testData)

        expect(result).toBe(expected)
    });
    test('Отправка данных', async () => {
        const expected = true

        const result = await regPage.pushConfButton(testData)

        expect(result).toBe(expected)
    });
    test('Проверка регистрации', async () => {
            const expected = true

            const result = await regPage.isRegistered(testData)

            expect(result).toBe(expected)
    });
});
describe('Тесты страницы регистрации(негативные)', () => {
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
        const result = await regPage.goToRegPage(testData)

        expect(result).toBe(expected)
    });
    test('Ввод radioButton', async () => {
        const expected = true

        const result = await regPage.setRadio(testData)

        expect(result).toBe(expected)
    });
    test('Ввод имени', async () => {
        const expected = true

        const result = await regPage.setFName(testData)

        expect(result).toBe(expected)
    });
    test('Ввод фамилии', async () => {
        const expected = true

        const result = await regPage.setLName(testData)

        expect(result).toBe(expected)
    });
    test('Ввод e-mail', async () => {
        const expected = true
        const testData={regiPage:{setEmail:{method:"id",name:"Email",data:"pingpong8@yandex.ru"}}}
        const result = await regPage.setEmail(testData)

        expect(result).toBe(expected)
    });
    test('Ввод пароля', async () => {
        const expected = true

        const result = await regPage.setPassword(testData)

        expect(result).toBe(expected)
    });
    test('Подтверждение пароля', async () => {
        const expected = true

        const result = await regPage.setPasswordConfirm(testData)

        expect(result).toBe(expected)
    });
    test('Отправка данных', async () => {
        const expected = true

        const result = await regPage.pushConfButton(testData)

        expect(result).toBe(expected)
    });
    test('Проверка регистрации', async () => {
        const expected = false

        const result = await regPage.isRegistered(testData)

        expect(result).toBe(expected)
    });
});