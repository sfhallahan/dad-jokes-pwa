describe('DadJokes homepage', () => {
  it('successfully loads', () => {
    cy.visit('/')
  })
  describe('built for mobile banner', () => {
    beforeEach(() => {})
    it('displays the mobile first banner on desktop', () => {
      cy.viewport(1250, 800)
      cy.visit('/')
      cy.get('#desktop-modal').should('exist')
      cy.contains('This is site was built for mobile')
    })
    it('clicking the okay button clears the modal', () => {
      cy.viewport(1250, 800)
      cy.visit('/')
      cy.get('#close-desktop-modal-button').click()
      cy.get('#desktop-modal').should('not.exist')
    })
    it('does not display for mobile', () => {
      cy.viewport(350, 650)
      cy.visit('/')
      cy.get('#desktop-modal').should('not.exist')
    })
  })
})
