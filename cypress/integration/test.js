describe('LandingPage', () => {
  it('should have a link on the page', () => {
    cy.visit('https://caviar-dreams-8c551.firebaseapp.com')
    cy.get('#main').click()
    cy.url().should('include', '/home')
  })
  it('should have a user input on the page', () => {
    cy.get('input')
  })
})
