const {FilterPage} = require('../pages/FilterPage.js')
const {Browser, Builder} = require('selenium-webdriver')
const {URL} = require("../consts.js")
const fs = require('fs');

let rawdata = fs.readFileSync('tests/testData.json');
let testData = JSON.parse(rawdata);

describe('Тесты перехода по основным разделам', () => {
    let driver = new Builder().forBrowser(Browser.CHROME).build();
    let filteriPage;
    beforeAll(async () => {
        return filteriPage = await new FilterPage(driver, URL);
    });
    afterAll(async () => {
        await driver.quit()
    });
    test('Переход на страницу книг для фильтрации', async () => {
        const expected = true

        filteriPage.openSite()

        const result = await filteriPage.goToPage(testData)

        expect(result).toBe(expected)
    });
    test('Установка фильра', async () => {
        const expected = true

        const result = await filteriPage.setFilter(testData)

        expect(result).toBe(expected)
    });
    test('Проверка соответствия фильтра и товаров', async () => {
        const expected = false

        const result = await filteriPage.compareFilterOverToItems(testData)

        expect(result).toBe(expected)
    });
});