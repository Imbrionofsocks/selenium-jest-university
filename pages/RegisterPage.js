const {BasePage} = require("./BasePage.js");

class RegisterPage extends BasePage{
    constructor(driver,url) {
        super(driver,url);
    }

    openSite(){
        return this.open()
    }
    goToRegPage(testData){
        return this.findAndClick(testData.regiPage.goToRegPage.method,testData.regiPage.goToRegPage.name)
    }
    setRadio(testData){
        return this.findAndClick(testData.regiPage.setRadio.method,testData.regiPage.setRadio.name)
    }
    setFName(testData){
        return this.sendDataToElement(testData.regiPage.setFName.method,testData.regiPage.setFName.name,testData.regiPage.setFName.data)
    }
    setLName(testData){
        return this.sendDataToElement(testData.regiPage.setLName.method,testData.regiPage.setLName.name,testData.regiPage.setLName.data)
    }
    setEmail(testData){
        return this.sendDataToElement(testData.regiPage.setEmail.method,testData.regiPage.setEmail.name,testData.regiPage.setEmail.data)
    }
    setPassword(testData){
        return this.sendDataToElement(testData.regiPage.setPassword.method,testData.regiPage.setPassword.name,testData.regiPage.setPassword.data)
    }
    setPasswordConfirm(testData){
        return this.sendDataToElement(testData.regiPage.setPasswordConfirm.method,testData.regiPage.setPasswordConfirm.name,testData.regiPage.setPasswordConfirm.data)
    }
    pushConfButton(testData){
        return this.findAndClick(testData.regiPage.pushConfButton.method,testData.regiPage.pushConfButton.name,testData.regiPage.pushConfButton.data)
    }
    isRegistered(testData){
        return this.justFind(testData.regiPage.isRegistered.method,testData.regiPage.isRegistered.name)
    }
}

module.exports={RegisterPage}