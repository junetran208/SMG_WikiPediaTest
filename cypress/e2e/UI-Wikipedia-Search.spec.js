import customTasks from "../support/ScreenshotComparator";
describe('Verify the search function', () => {
    it('TC1: Verify that it will return the correct page by searching topic', () => {
      cy.visit('/');
      cy.get('.cdx-text-input__input').type('software testing');
      cy.get('.cdx-button--action-default').click();
      cy.url().should('include', '/wiki/Software_testing'); 
      cy.contains('Software testing');      
    });
  
    it('TC2: Verify that the error is shown on search result page if given a long string for the query', () => {
      cy.visit('/');
      cy.get('.cdx-text-input__input').type('Software testing is the act of examining the artifacts and the ehavior of the software under test by validation and verification. Software testing can also provide an objective, independent view of the software to allow the business to appreciate and understand the risksbehavior of the software under test by validation and verification. Software testing can also provide an objective, independent view of the software to allow the business to appreciate and understand the risks of software');
      cy.get('.cdx-button--action-default').click();
      cy.contains('An error has occurred while searching: Search request is longer than the maximum allowed length'); // Verify that the page contains the expected text
      // cy.screenshot('captured-screenshot');
      // Cypress.Commands.add('compareScreenshots', (capturedScreenshot, expectedScreenshot) => {
      //   return cy.task('compareScreenshots', { capturedScreenshot, expectedScreenshot });
      // });
      // cy.compareScreenshots('captured-screenshot.png', 'expected-screenshot.png').should('equal', true);
    });
    
  });
  