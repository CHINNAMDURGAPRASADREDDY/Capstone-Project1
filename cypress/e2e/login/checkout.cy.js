
describe('Checkout Process', () => {
    it('should complete checkout with valid payment details', () => {
      cy.visit('https://www.demoblaze.com');
      cy.get('#cartur').click();
      cy.get('.btn-success').contains('Place Order').click();
      cy.get('#name').type('John Doe');
      cy.get('#country').type('USA');
      cy.get('#city').type('New York');
      cy.get('#card').type('1234567890123456');
      cy.get('#month').type('12');
      cy.get('#year').type('2024');
      cy.get('.btn-primary').contains('Purchase').click();
      cy.get('.sweet-alert').should('contain.text', 'Thank you for your purchase!');
    });
  });