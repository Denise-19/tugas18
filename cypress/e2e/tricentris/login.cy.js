import BaseLogin from "../../support/PageObject/loginPage.cy"
const loginData = require("../../fixtures/tricentis/login.json")

describe('tricentis test', () => {
    it('login', () => {
      cy.visit('https://demowebshop.tricentis.com/')
      BaseLogin.clickLoginMenu()
       //   cy.get('#Email').type("sanbercode81@gmail.com")
      BaseLogin.inputEmail(loginData.validEmail)
   //   cy.get('#Password').type("Sanber123@")
      BaseLogin.inputPass(loginData.validPass)
    //   cy.get('#RememberMe').click()
    //   cy.get('form > .buttons > .button-1').click()
      BaseLogin.clickLoginBtn()
    //   cy.get('.ico-logout').should('be.visible')
    })

    it.only('cart', () => {
        cy.visit('https://demowebshop.tricentis.com/')
        cy.get('.ico-login').click()
        cy.get('#Email').type(loginData.validEmail)
        cy.get('#Password').type(loginData.validPass)
        cy.get('#RememberMe').click()
        cy.get('form > .buttons > .button-1').click()
        cy.get('.ico-logout').should('be.visible')
        // cy.get('.page-body > .buttons > .button-1').click()
        cy.get(':nth-child(2) > .product-item > .details > .add-info > .buttons > .button-2').click()
        cy.get('.ico-cart > .cart-label').click()
        cy.get('#giftcard_2_RecipientName').type("sanber")
        cy.get('#giftcard_2_RecipientEmail').type("sanberr@gmail.com")
        cy.get('#giftcard_2_Message').type("coba deh")
        cy.get('#add-to-cart-button-2').click()
        
        cy.get('.content').should('contain.text','The product has been added to your shopping cart')

      })
  })