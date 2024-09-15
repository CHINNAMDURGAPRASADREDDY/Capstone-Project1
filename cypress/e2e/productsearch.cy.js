
describe('Simple Product Search', () => {
    
    it('Find a product ', () => {
      
      cy.visit('https://www.demoblaze.com');

      const productNameToSearch = 'Samsung galaxy s6';
  
      cy.get('.card-title').contains(productNameToSearch).click();
    });
  });
  