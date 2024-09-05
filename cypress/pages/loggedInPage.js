export class loggedInPage{
    webLocators={
        profileOpt:"img[alt='user-dp']",
        signOut:"body > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > p:nth-child(2)",
        admin_signOut:"body > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > p:nth-child(2)",
        certificates : "body > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(2) > div:nth-child(3)",
        xp_signOut:"//p[normalize-space()='Sign Out']"
    }

    click_profileOpt(){
        cy.get(this.webLocators.profileOpt).click()
    }
    click_signOut(){
        cy.get(this.webLocators.signOut).click()
     } 
     click_signOut_xp(){
        cy.xpath("//p[normalize-space()='Sign Out']").click()
     } 
    click_adminSignOut(){
        cy.get(this.webLocators.admin_signOut).click()
    }
    click_certificates(){
        cy.get(this.webLocators.certificates).click()
    }
}