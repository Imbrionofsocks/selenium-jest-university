const {RegisterPage} = require('./pages/RegisterPage.js')
const {Browser, Builder} = require('selenium-webdriver')
const {URL} = require("./consts.js")
const driver = new Builder().forBrowser(Browser.CHROME).build();
const regPage = new RegisterPage(driver,URL);
regPage.open()