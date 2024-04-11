const {BasePage} = require("./BasePage.js");

class FilterPage extends BasePage{
    constructor(driver,url) {
        super(driver,url);
    }
    openSite(){
        return this.open()
    }
    goToPage(testData){
        return this.findAndClick(testData.filteriPage.goToPage.method,testData.filteriPage.goToPage.name)
    }
    setFilter(testData){
        return this.findAndClick(testData.filteriPage.setFilter.method,testData.filteriPage.setFilter.name)
    }
    compareFilterOverToItems(testData){
        return this.compareTextToText(testData.filteriPage.compareFilterOverToItems.method_first,testData.filteriPage.compareFilterOverToItems.name_first,testData.filteriPage.compareFilterOverToItems.method_second,testData.filteriPage.compareFilterOverToItems.name_second)
    }
}

module.exports={FilterPage}