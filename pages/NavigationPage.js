const {BasePage} = require("./BasePage.js");

class NavigationPage extends BasePage{
    constructor(driver,url) {
        super(driver,url);
    }

    openSite(){
        return this.open()
    }
    goToBooks(testData){
        return this.findAndClick(testData.naviPage.goToBooks.method,testData.naviPage.goToBooks.name)
    }
    goToComputers(testData){
        return this.findAndClick(testData.naviPage.goToComputers.method,testData.naviPage.goToComputers.name)
    }
    goToElectronics(testData){
        return this.findAndClick(testData.naviPage.goToElectronics.method,testData.naviPage.goToElectronics.name)
    }
    goToShoes(testData){
        return this.findAndClick(testData.naviPage.goToShoes.method,testData.naviPage.goToShoes.name)
    }
    goToDownloads(testData){
        return this.findAndClick(testData.naviPage.goToDownloads.method,testData.naviPage.goToDownloads.name)
    }
    goToJewelry(testData){
        return this.findAndClick(testData.naviPage.goToJewelry.method,testData.naviPage.goToJewelry.name)
    }
    goToGifts(testData){
        return this.findAndClick(testData.naviPage.goToGifts.method,testData.naviPage.goToGifts.name)
    }
}

module.exports={NavigationPage}