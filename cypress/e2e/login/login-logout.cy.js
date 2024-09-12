describe('should Login Successfully', () => {
    it('should login with valid credentials', () => {
      cy.visit('https://www.demoblaze.com');
      cy.get('#login2').click();
      cy.wait(5000)
      cy.get('#loginusername').type('john auto12');
      cy.get('#loginpassword').type('john123e56');
      cy.get('.btn-primary').contains('Log in').click();
      cy.get('#nameofuser').should('contain.text', 'Welcome john auto12');
     
    });
    it('should logout successfully', () => {
        cy.visit('https://www.demoblaze.com');
        cy.get('#login2').click();
        cy.wait(5000)
        cy.get('#loginusername').type('john auto12');
        cy.get('#loginpassword').type('john123e56');
        cy.wait(5000)
        cy.get('.btn-primary').contains('Log in').click();
        cy.wait(5000)
        cy.get('#logout2').click();
        cy.wait(5000)
        cy.get('#nameofuser').should('not.be.visible');
  
      });
    it('should not login with invalid credentials', () => {
        cy.visit('https://www.demoblaze.com');
        cy.get('#login2').click();
        cy.wait(5000)
        cy.get('#loginusername').type('johnn 12');
        cy.get('#loginpassword').type('222333e5567');
        cy.get('.btn-primary').contains('Log in').click();
        cy.wait(5000)
        cy.on('window:alert', (alertText) => {
          expect(alertText).to.contains('User does not exist.');
        });
  });
  });