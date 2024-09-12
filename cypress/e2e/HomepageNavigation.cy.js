describe('Homepage Navigation', () => {
    
    it('should load the homepage correctly', () => {

      cy.visit('https://www.demoblaze.com');

      cy.get('div#carouselExampleIndicators').should('be.visible');

    });
  
    it('should display product categories', () => {

      cy.visit('https://www.demoblaze.com');
        
      cy.get('#itemc').should('be.visible'); 

    });

  });
  
  
  