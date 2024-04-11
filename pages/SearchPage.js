const {BasePage} = require("./BasePage.js");
const {until, By} = require("selenium-webdriver");

class SearchPage extends BasePage{
    constructor(driver,url) {
        super(driver,url);
    }

    openSite(){
        return this.open()
    }
    setRequest(testData){
        return this.sendDataToElement(testData.searchiPage.setRequest.method,testData.searchiPage.setRequest.name,testData.searchiPage.setRequest.data)
    }
    pushSearchButton(testData){
        return this.findAndClick(testData.searchiPage.pushSearchButton.method,testData.searchiPage.pushSearchButton.name)
    }
    checkSearch(testData){
        return this.compareValueToText(testData.searchiPage.checkSearch.method_first,testData.searchiPage.checkSearch.name_first,testData.searchiPage.checkSearch.method_second,testData.searchiPage.checkSearch.name_second)
    }
}

module.exports={SearchPage}