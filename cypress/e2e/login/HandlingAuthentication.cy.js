describe('Handling Authentication with UI', () => {
    it('should log in using the UI', () => {

      cy.loginUI('john auto12', 'john123e56');
      
      cy.get('#nameofuser').should('contain.text', 'john auto12');
    });
  });
  
  