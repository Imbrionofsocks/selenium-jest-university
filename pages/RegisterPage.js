const {BasePage} = require("./BasePage.js");

class RegisterPage extends BasePage{
    constructor(driver,url) {
        super(driver,url);
    }

    openSite(testData){
        return this.open()
    }
    goToRegPage(testData){
        return this.findAndClick("className","ico-register")
    }
    setRadio(testData){
        return this.findAndClick("id","gender-male")
    }
    setFName(testData){
        return this.sendDataToElement("id","FirstName","TestDataF")
    }
    setLName(testData){
        return this.sendDataToElement("id","LastName","TestDataL")
    }
    setEmail(testData){
        return this.sendDataToElement("id","Email","pingpong8@yandex.ru")
    }
    setPassword(testData){
        return this.sendDataToElement("id","Password","TestDataPass")
    }
    setPasswordConfirm(testData){
        return this.sendDataToElement("id","ConfirmPassword","TestDataPass")
    }
    pushConfButton(testData){
        return this.findAndClick("id","register-button")
    }
    isRegistered(testData){
        return this.justFind("className","account")
    }
}

module.exports={RegisterPage}