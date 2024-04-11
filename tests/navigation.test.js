const {NavigationPage} = require('../pages/NavigationPage.js')
const {Browser, Builder} = require('selenium-webdriver')
const {URL} = require("../consts.js")
const fs = require('fs');

let rawdata = fs.readFileSync('tests/testData.json');
let testData = JSON.parse(rawdata);

describe('Тесты перехода по основным разделам', () => {
    let driver = new Builder().forBrowser(Browser.CHROME).build();
    let naviPage;
    beforeAll(async () => {
        return naviPage = await new NavigationPage(driver, URL);
    });
    afterAll(async () => {
        await driver.quit()
    });
    test('Переход на страницу книг', async () => {
        const expected = true

        naviPage.openSite()

        const result = await naviPage.goToBooks(testData)

        expect(result).toBe(expected)
    });
    test('Переход на страницу компьютеров', async () => {
        const expected = true

        const result = await naviPage.goToComputers(testData)

        expect(result).toBe(expected)
    });
    test('Переход на страницу электроники', async () => {
        const expected = true

        const result = await naviPage.goToElectronics(testData)

        expect(result).toBe(expected)
    });
    test('Переход на страницу обуви', async () => {
        const expected = true

        const result = await naviPage.goToShoes(testData)

        expect(result).toBe(expected)
    });
    test('Переход на страницу загрузок', async () => {
        const expected = true

        const result = await naviPage.goToDownloads(testData)

        expect(result).toBe(expected)
    });
    test('Переход на страницу украшений', async () => {
        const expected = true

        const result = await naviPage.goToJewelry(testData)

        expect(result).toBe(expected)
    });
    test('Переход на страницу подарков', async () => {
        const expected = true

        const result = await naviPage.goToGifts(testData)

        expect(result).toBe(expected)
    });
});