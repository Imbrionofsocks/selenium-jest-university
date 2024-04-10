const {By, Key, until} = require('selenium-webdriver')

class BasePage {
    constructor(driver, url) {
        this.driver = driver
        this.url = url;
    }

    async open() {
       await this.driver.get(this.url);
    }

    async justFind(method, name) {
        return (await this.driver.wait(until.elementLocated(By[method](name)), 10000)) ? true : false;
    }

    async findAndClick(method, name) {
        const element = await this.driver.wait(until.elementLocated(By[method](name)), 10000);
        if(element){
            await element.click();
            return true
        }else{
            return false
        }
    }

    async sendDataToElement(method, name, data) {
            const element = await this.driver.wait(until.elementLocated(By[method](name)), 10000); // 10 секунд ожидания
            if(element){
                await element.sendKeys(data, Key.INSERT);
                return true
            }else{
                return false
            }
    }
}

module.exports = {BasePage}