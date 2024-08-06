describe('Add to cart', () => {
  const user = {
    username: 'Misha13',
    password: '12345678'
  };

  before(() => {
    cy.visit('https://www.demoblaze.com/');
  });
  it('should add product to the cart', () => {
    cy.get('#login2').click();
    cy.get('#loginusername').type(user.username,{force: true});
    cy.get('#loginpassword').type(user.password,{force: true});

    cy.get('.btn').contains('Log in').click({force: true});

    cy.get('.hrefch').contains('Samsung galaxy s6').click();
    cy.get('.btn').contains('Add to cart').click({force: true});

    cy.on('window:alert', (text) => {
      expect(text).to.eq('Product added.')                             
    })
  });
});