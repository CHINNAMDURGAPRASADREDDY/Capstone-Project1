describe('User Registration', () => {
  it('should register a new user with valid inputs', () => {
    cy.visit('https://www.demoblaze.com');
    cy.get('#signin2').click();
    cy.wait(5000)
    cy.get('#sign-username').type('john auto123');
       
    cy.get('#sign-password').type('john123e567');
    cy.get('.btn-primary').contains('Sign up').click();
    
    cy.on('window:alert', (alertText) => {
      expect(alertText).to.contains('Sign up successful');
    });
  });
});
describe('User Registration', () => {
    it('should show error with invalid inputs', () => {
      cy.visit('https://www.demoblaze.com');
      cy.get('#signin2').click();
      cy.wait(5000)
      cy.get('#sign-username').type('testuser 12');
      cy.get('#sign-password').type('password123e');
      cy.get('.btn-primary').contains('Sign up').click();
      cy.wait(5000)
      cy.on('window:alert', (alertText) => {
        expect(alertText).to.contains('This user already exist.');
      });
    });
  });
  