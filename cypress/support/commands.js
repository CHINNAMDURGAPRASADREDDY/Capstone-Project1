// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
    // Custom command to log in
    
Cypress.Commands.add('login', (username, password) => {
    cy.visit('https://www.demoblaze.com');
    cy.get('#login2').click();
    cy.wait(5000)
    cy.get('#loginusername').type(username); 
    cy.get('#loginpassword').type(password);  
    cy.get('.btn-primary').contains('Log in').click();
  });
  
  
  Cypress.Commands.add('addToCart', (itemName) => {
    cy.get('.hrefch').contains(itemName).click(); 
    cy.get('.btn-success').click();
    cy.on('window:alert', (alertText) => {
      expect(alertText).to.contains('Product added');
    });
    
    cy.visit('https://www.demoblaze.com/cart.html');
    cy.get('.success').should('be.visible');
        //cy.go('back');
  });


  Cypress.Commands.add('loginUI', (username, password) => {
    cy.visit('https://www.demoblaze.com');
    
    // Open the login modal
    cy.get('#login2').click();
    cy.wait(5000)
    // Fill in the login form
    cy.get('#loginusername').type(username);
    cy.get('#loginpassword').type(password);
  
    // Submit the login form
    cy.get('button').contains('Log in').click();
    cy.wait(5000)
  
    // Verify successful login by checking for the presence of the username
    cy.get('#nameofuser').should('contain.text', `Welcome ${username}`);
  });
  
  
  
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })