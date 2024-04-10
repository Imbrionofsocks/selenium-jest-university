import {By, Key, until} from 'selenium-webdriver'
import dotenv from 'dotenv';

dotenv.config();

export class BasePage {
    constructor(driver) {
        this.driver = driver
        this.url = process.env.URL;
    }

    async open() {
        await this.driver.get(this.url)
    }

    async findAndClick(method, name) {
        const element = await this.driver.findElement(By[method](name));
        await element.click();
    }

    async sendDataToElement(method, name, data) {
        const element = await this.driver.wait(until.elementLocated(By[method](name)), 10000); // 10 секунд ожидания
        await element.sendKeys(data, Key.INSERT);
    }

}