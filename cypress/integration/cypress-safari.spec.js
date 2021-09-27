it('Playwright at work', () => {
  cy.log('Attempt to integrate with safari');
  cy.task('openSafari');
  cy.log('Integrated with safari');
})