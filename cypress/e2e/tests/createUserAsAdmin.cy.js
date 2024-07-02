import { loginPage } from "../../pages/loginPage"
import { loggedInPage } from "../../pages/loggedInPage"
import loginPageData from "../../fixtures/loginPageData.json"
const loginPageObj= new loginPage()
const loggedInObj = new loggedInPage()

describe('Test Login',() =>{
    before( ()=>{
        cy.login(loginPageData.admin_username,loginPageData.admin_password)
    })
    it('Admin login flow',() =>{
        loginPageObj.click_submitButton()
        loggedInObj.click_profileOpt()
        loggedInObj.click_adminSignOut()
    })
})