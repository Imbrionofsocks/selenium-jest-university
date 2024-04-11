const {SearchPage} = require('../pages/searchPage.js')
const {Browser, Builder} = require('selenium-webdriver')
const {URL} = require("../consts.js")
const fs = require('fs');

let rawdata = fs.readFileSync('tests/testData.json');
let testData = JSON.parse(rawdata);

describe('Тесты поиска', () => {
    let driver = new Builder().forBrowser(Browser.CHROME).build();
    let searchiPage;
    beforeAll(async () => {
        return searchiPage = await new SearchPage(driver, URL);
    });
    afterAll(async () => {
        await driver.quit()
    });
    test('Ввод данных в поле поиска', async () => {
        const expected = true

        searchiPage.openSite()

        const result = await searchiPage.setRequest(testData)

        expect(result).toBe(expected)
    });
    test('Нажатие кнопки поиска', async () => {
        const expected = true

        const result = await searchiPage.pushSearchButton(testData)

        expect(result).toBe(expected)
    });
    test('Сравнение запрашиваемого значения и найденного', async () => {
        const expected = true
        const result = await searchiPage.checkSearch(testData)
        expect(result).toBe(expected)
    });
});