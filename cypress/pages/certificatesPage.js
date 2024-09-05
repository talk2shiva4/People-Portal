export class certificatesPage{
    webLocators={
        viewCertificate:"button:nth-child(1) span:nth-child(1)",
        downloadCertificate:"button:nth-child(2) span:nth-child(1)",
        openedCertficate: "div[class='preview'] img:nth-child(1)",
        closeButtonCertficate:"img[alt='close-icon']"
    }

    click_viewCertificate(){
        cy.get(this.webLocators.viewCertificate).click()
    }
    click_closeButtonCertficate(){
        cy.get(this.webLocators.closeButtonCertficate).click()
    }
}