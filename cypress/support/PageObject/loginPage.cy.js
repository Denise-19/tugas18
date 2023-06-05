// const loginData = require("../../fixtures/tricentis")
class BaseLogin {
    loginMenu = '.ico-login'
    email = '#Email'
    password = '#Password'
    remenberMe = '#RememberMe'
    loginBtn = 'form > .buttons > .button-1'
    logoutMenu = '.ico-logout'

    clickLoginMenu(){
        cy.get(this.loginMenu).click()
    }
    inputEmail(email){
        cy.get(this.email).type(email)
    }
    inputPass(password){
        cy.get(this.passw).type(password)
    }
    clickLoginBtn(){
        cy.get(this.loginBtn).click()
    }
    verifyLogout(){
        cy.get(this.loginMenu).should('be.visible')
    }
}
export default BaseLogin;
