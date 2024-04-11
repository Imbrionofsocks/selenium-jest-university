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
    async compareValueToText(method_first, name_first,method_second,name_second) {
        let searchFieldValue = "";
        let foundItem = "";

        try {
            let searchFieldElement = await this.driver.wait(until.elementLocated(By[method_first](name_first)), 10000);
            searchFieldValue = await searchFieldElement.getAttribute('value');
        } catch (error) {
            console.error("Элемент не найден: ", error);
        }

        try {
            let productTitleElement = await this.driver.wait(until.elementLocated(By[method_second](name_second)), 10000);
            foundItem = await productTitleElement.getText();
        } catch (error) {
            if (error.name === 'StaleElementReferenceError') {
                console.log("Элемент устарел. Поиск...");

                try {
                    let productTitleElementRetry = await this.driver.wait(until.elementLocated(By[method_second](name_second)), 10000);
                    foundItem = await productTitleElementRetry.getText();
                } catch (retryError) {
                    console.error("Повторная попытка поиска: ", retryError);
                }
            } else {
                console.error("Элемент не найден: ", error);
            }
        }

        return searchFieldValue.toLowerCase() === foundItem.toLowerCase()
    }
    async compareTextToText(method_first,name_first,method_second,name_second) {
        let searchFieldValue = "";
        let foundItem = "";

        try {
            let searchFieldElement = await this.driver.wait(until.elementLocated(By[method_first](name_first)), 10000);
            searchFieldValue = await searchFieldElement.getText();
        } catch (error) {
            console.error("Элемент не найден: ", error);
        }

        try {
            let productTitleElement = await this.driver.wait(until.elementLocated(By[method_second](name_second)), 10000);
            foundItem = await productTitleElement.getText();
        } catch (error) {
            if (error.name === 'StaleElementReferenceError') {
                console.log("Элемент устарел. Поиск...");

                try {
                    let productTitleElementRetry = await this.driver.wait(until.elementLocated(By[method_second](name_second)), 10000);
                    foundItem = await productTitleElementRetry.getText();
                } catch (retryError) {
                    console.error("Повторная попытка поиска: ", retryError);
                }
            } else {
                console.error("Элемент не найден: ", error);
            }
        }

        return searchFieldValue.toLowerCase() === foundItem.toLowerCase()
    }
}

module.exports = {BasePage}