const {CartPage} = require('../pages/CartPage.js')
const {Browser, Builder} = require('selenium-webdriver')
const {URL} = require("../consts.js")
const fs = require('fs');

let rawdata = fs.readFileSync('tests/testData.json');
let testData = JSON.parse(rawdata);

describe('Тесты корзины', () => {
    let driver = new Builder().forBrowser(Browser.CHROME).build();
    let cartiPage;
    beforeAll(async () => {
        return cartiPage = await new CartPage(driver, URL);
    });
    afterAll(async () => {
        await driver.quit()
    });
    test('Переход на страницу книг для добавления в корзину', async () => {
        const expected = true

        cartiPage.openSite()

        const result = await cartiPage.goToCategoryPage(testData)

        expect(result).toBe(expected)
    });
    test('Переход на страницу товара', async () => {
        const expected = true

        const result = await cartiPage.goToProductPage(testData)

        expect(result).toBe(expected)
    });
    test('Добавление товара в корзину', async () => {
        const expected = true

        const result = await cartiPage.addToCart(testData)

        expect(result).toBe(expected)
    });
    test('Переход на страницу корзины', async () => {
        const expected = true

        const result = await cartiPage.goToCartPage(testData)

        expect(result).toBe(expected)
    });
    test('Отметка товара на удаление', async () => {
        const expected = true

        const result = await cartiPage.pushRemove(testData)

        expect(result).toBe(expected)
    });
    test('Установка количества товара', async () => {
        const expected = true

        const result = await cartiPage.setProductAmount(testData)

        expect(result).toBe(expected)
    });
    test('Подверждение изменений корзины', async () => {
        const expected = true

        const result = await cartiPage.pushUpdateCart(testData)

        expect(result).toBe(expected)
    });
});