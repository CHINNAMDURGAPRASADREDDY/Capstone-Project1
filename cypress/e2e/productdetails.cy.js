
describe('Product Details', () => {
    it('should display accurate product details', () => {
      cy.visit('https://www.demoblaze.com');
      cy.get('.hrefch').first().click(); 
      cy.get('.name').should('be.visible'); 
      cy.get('.price-container').should('contain.text', '$');
    });
  
    it('should add items to the cart', () => {
        cy.visit('https://www.demoblaze.com/');
        cy.get('.hrefch').first().click();
        cy.wait(5000)
        cy.get('.btn-success').click();
        cy.wait(5000)
        cy.visit('https://www.demoblaze.com/cart.html');
        cy.get('.success').should('be.visible');
      });
    });
  
  