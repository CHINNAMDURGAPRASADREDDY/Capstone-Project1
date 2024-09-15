
describe('Using Custom Commands', () => {

    it('should log in using custom command', () => {

      cy.login('john auto12', 'john123e56');
    });
});

describe('Using Custom Commands', () => {

it('should add item to cart using custom command', () => {

    cy.login('john auto12', 'john123e56');

    cy.wait(5000)

    cy.addToCart('Samsung galaxy s6');
  });
  
});