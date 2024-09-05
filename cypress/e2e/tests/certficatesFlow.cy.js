import { loginPage } from "../../pages/loginPage"
import { loggedInPage } from "../../pages/loggedInPage"
import loginPageData from "../../fixtures/loginPageData.json"
import { certificatesPage } from "../../pages/certificatesPage"

const loginPageObj= new loginPage()
const loggedInObj = new loggedInPage()
const certObj = new certificatesPage()


before(() => {
    loginPageObj.openURL()
    loginPageObj.enter_username(loginPageData.normal_username)
    loginPageObj.enter_password(loginPageData.normal_password)
    loginPageObj.click_submitButton()
})

it('Normal User view certficate',() =>{
    loggedInObj.click_certificates()
    cy.wait(5000)
    //certObj.click_viewCertificate()
    //certObj.click_closeButtonCertficate()
})

after(() => {
    loggedInObj.click_profileOpt()
    loggedInObj.click_signOut()
})
