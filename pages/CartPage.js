const {BasePage} = require("./BasePage.js");

class CartPage extends BasePage{
    constructor(driver,url) {
        super(driver,url);
    }

    openSite(){
        return this.open()
    }
    goToCategoryPage(testData){
        return this.findAndClick(testData.regiPage.goToRegPage.method,testData.regiPage.goToRegPage.name)
    }
    goToProductPage(testData){
        return this.findAndClick(testData.regiPage.goToRegPage.method,testData.regiPage.goToRegPage.name)
    }
    addToCart(testData){
        return this.findAndClick(testData.regiPage.setRadio.method,testData.regiPage.setRadio.name)
    }
    goToCartPage(testData){
        return this.findAndClick(testData.regiPage.setRadio.method,testData.regiPage.setRadio.name)
    }
    pushRemove(testData){
        return this.findAndClick(testData.regiPage.setRadio.method,testData.regiPage.setRadio.name)
    }
    setProductAmount(testData){
        return this.sendDataToElement(testData.regiPage.setEmail.method,testData.regiPage.setEmail.name,testData.regiPage.setEmail.data)
    }
    pushUpdateCart(testData){
        return this.findAndClick(testData.regiPage.setRadio.method,testData.regiPage.setRadio.name)
    }
}

module.exports={CartPage}