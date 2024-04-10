import {RegisterPage} from './pages/RegisterPage.js'
import {Browser, Builder} from "selenium-webdriver";

const driver = new Builder().forBrowser(Browser.CHROME).build();
const regPage = new RegisterPage(driver);

regPage.open();
regPage.findAndClick("className","ico-register")
regPage.sendDataToElement("id","FirstName","TestData")
