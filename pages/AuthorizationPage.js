const {BasePage} = require("./BasePage.js");

class AuthorizationPage extends BasePage{
    constructor(driver,url) {
        super(driver,url);
    }

    openSite(){
        return this.open()
    }
    goToAuthPage(testData){
        return this.findAndClick(testData.authiPage.goToAuthPage.method,testData.authiPage.goToAuthPage.name)
    }
    setEmail(testData){
        return this.sendDataToElement(testData.authiPage.setEmail.method,testData.authiPage.setEmail.name,testData.authiPage.setEmail.data)
    }
    setPassword(testData){
        return this.sendDataToElement(testData.authiPage.setPassword.method,testData.authiPage.setPassword.name,testData.authiPage.setPassword.data)
    }
    pushConfButton(testData){
        return this.findAndClick(testData.authiPage.pushConfButton.method,testData.authiPage.pushConfButton.name)
    }
    isAuthorized(testData){
        return this.justFind(testData.authiPage.isAuthorized.method,testData.authiPage.isAuthorized.name)
    }
}

module.exports={AuthorizationPage}