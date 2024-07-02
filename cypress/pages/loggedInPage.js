export class loggedInPage{
    webLocators={
        profileOpt:"img[alt='user-dp']",
        signOut:"body > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(3) > div:nth-child(2) > div:nth-child(3) > p:nth-child(2)",
        admin_signOut:"body > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(3) > p:nth-child(2)"
    }

    click_profileOpt(){
        cy.get(this.webLocators.profileOpt).click()
    }
    click_signOut(){
        cy.get(this.webLocators.signOut).click()
    }
    click_adminSignOut(){
        cy.get(this.webLocators.admin_signOut).click()
    }

}