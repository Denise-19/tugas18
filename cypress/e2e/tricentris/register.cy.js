describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://demowebshop.tricentis.com/')
    cy.get('.ico-register').click()
    cy.get('#FirstName').type("sanbercode")
    cy.get('#LastName').type("bootcamp")
    cy.get('#Email').type("sanbercode81@gmail.com")
    cy.get('#Password').type("Sanber123@")
    cy.get('#ConfirmPassword').type("Sanber123@")
    cy.get('#register-button').click()
    // cy.get('.validation-summary-errors > ul > li').should('contain.text', 'The specified email already exists')
    // cy.get('.field-validation-error > span').should('contain.text', 'The password and confirmation password do not match.')
    cy.get('.result').should('contain.text', 'Your registration completed')

  })
})