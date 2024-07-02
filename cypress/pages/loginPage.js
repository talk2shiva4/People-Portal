export class loginPage{
    webLocators={
        userame:"input[placeholder='Enter username']",
        password:"input[placeholder='Enter password']",
        submit:"button[type='submit']"
    }

    openURL(){
        cy.visit(Cypress.env('URL'))
    }
    enter_username(Uname){
        cy.get(this.webLocators.userame).type(Uname)
    }
    enter_password(Pword){
        cy.get(this.webLocators.password).type(Pword)
    }
    click_submitButton(){
        cy.get(this.webLocators.submit).click()
    }

}