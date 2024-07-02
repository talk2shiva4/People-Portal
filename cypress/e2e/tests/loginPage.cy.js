import { loginPage } from "../../pages/loginPage"
import { loggedInPage } from "../../pages/loggedInPage"
import loginPageData from "../../fixtures/loginPageData.json"
const loginPageObj= new loginPage()
const loggedInObj = new loggedInPage()

describe('Test Login',() =>{
    it('Admin login flow',() =>{
        loginPageObj.openURL()
        loginPageObj.enter_username(loginPageData.admin_username)
        loginPageObj.enter_password(loginPageData.admin_password)
        loginPageObj.click_submitButton()
        loggedInObj.click_profileOpt()
        loggedInObj.click_adminSignOut()
    })

    it('Super User login flow',() =>{
        loginPageObj.openURL()
        loginPageObj.enter_username(loginPageData.super_username)
        loginPageObj.enter_password(loginPageData.super_password)
        loginPageObj.click_submitButton()
        loggedInObj.click_profileOpt()
        loggedInObj.click_signOut()
    })
    it('Hyper User login flow',() =>{
        loginPageObj.openURL()
        loginPageObj.enter_username(loginPageData.hyper_username)
        loginPageObj.enter_password(loginPageData.hyper_password)
        loginPageObj.click_submitButton()
        loggedInObj.click_profileOpt()
        loggedInObj.click_signOut()
    })
    it('Normal User login flow',() =>{
        loginPageObj.openURL()
        loginPageObj.enter_username(loginPageData.normal_username)
        loginPageObj.enter_password(loginPageData.normal_password)
        loginPageObj.click_submitButton()
        loggedInObj.click_profileOpt()
        loggedInObj.click_signOu1t()
    })
})