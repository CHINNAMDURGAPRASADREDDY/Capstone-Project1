
describe('Using Fixtures', () => {
    beforeEach(function () {
      cy.fixture('userData').then((user) => {
        this.user = user;
      });
    });
  
    it('should log in using fixture data', function () {
      cy.visit('https://www.demoblaze.com');
      cy.get('#login2').click();
      cy.wait(5000)
      cy.get('#loginusername').type(this.user.username);
      cy.get('#loginpassword').type(this.user.password);
      cy.get('.btn-primary').contains('Log in').click();
      cy.wait(5000)
      cy.get('#nameofuser').should('contain.text', `Welcome ${this.user.username}`);
    });
  });