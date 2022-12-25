describe('empty spec', () => {
  it('passes', () => {
    cy.visit('https://www.google.ro/')
    cy.get('#L2AGLb > .QS5gu').click()
    cy.get('.gLFyf').type('Speranta si prietenii colinde')
    cy.get(':nth-child(1) > .eIPGRd').click()

  })
})