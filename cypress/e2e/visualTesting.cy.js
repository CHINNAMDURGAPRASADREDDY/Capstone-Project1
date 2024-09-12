describe('Visual Testing - Demoblaze Homepage', () => {
    it('should match the homepage screenshot', () => {
      cy.visit('https://www.demoblaze.com');
      cy.matchImageSnapshot({
        failureThreshold: 0.12, 
        failureThresholdType: 'percent',
      });
    });
  });
  