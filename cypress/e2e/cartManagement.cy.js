 
  describe('Cart Management', () => {
    it('should add items to the cart', () => {
      cy.visit('https://www.demoblaze.com/');
      cy.get('.card-title').first().find('a').click();
      cy.wait(5000)
      cy.get('.btn-success').click();
      cy.visit('https://www.demoblaze.com/cart.html');
      cy.wait(5000)
      cy.get('#tbodyid').find('tr.success').should('exist')
    });
  });
  
  describe('Cart Management', () => {
    it('should remove items from the cart', () => {
        cy.visit('https://www.demoblaze.com/');
        cy.get('.card-title').first().find('a').click();
        cy.wait(5000)
        cy.get('.btn-success').click();
        cy.visit('https://www.demoblaze.com/cart.html');
        cy.wait(5000)
        cy.get('a').contains('Delete').click()
        cy.get('#tbodyid').find('tr.success').should('not.exist');
  
      });
  
  });
  
  