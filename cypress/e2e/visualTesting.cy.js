
describe('Visual Testing - Demoblaze Homepage', () => {
    it('should match the Homepage screenshot', () => {
      cy.visit('https://www.demoblaze.com');
      cy.matchImageSnapshot({

        failureThreshold: 0.16, 
        failureThresholdType: 'percent',
      });
    });
  });
  