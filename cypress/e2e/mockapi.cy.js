describe('Mocking API and Interacting with Demo Site', () => {
    beforeEach(() => {
      Cypress.on('uncaught:exception', (err, runnable) => {
        return false;
      });
    });
  
    it('should mock the product list API and verify product display after interaction', () => {
      
      cy.intercept('GET', 'https://api.demoblaze.com/entries', (req) => {
        req.reply({
          statusCode: 200,
          body: {
            Items: [
              {
                id: 1,
                title: "Samsung Galaxy S6",
                description: "A high-end smartphone.",
                price: "360",
                image: "samsung.jpg",
                category: "Phones"
              },
              {
                id: 2,
                title: "Sony Xperia Z5",
                description: "A premium smartphone.",
                price: "400",
                image: "sony.jpg",
                category: "Phones"
              }
            ]
          }
        });
      }).as('getProducts');
      cy.visit('https://www.demoblaze.com/');
      cy.wait('@getProducts');
  
      
      cy.get('#itemc').click();
  
      cy.wait(2000);
  
      
      cy.get('body').then((body) => {
        console.log(body.html()); 
      });
      cy.get('.card-title').then((elements) => {
        console.log(`Found ${elements.length} card-title elements`);
      });
      cy.get('.card-title', { timeout: 10000 }).should('have.length', 7); 
    });
  });
  
 