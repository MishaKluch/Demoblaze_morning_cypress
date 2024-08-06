describe('Sign In page', () => {
  const user = {
    username: 'Misha13',
    password: '12345678'
  };

  before(() => {
    cy.visit('https://www.demoblaze.com/');
  });
  it('should provide an ability to log in', () => {
    cy.get('#login2').click();
    cy.get('#loginusername').type(user.username,{force: true});
    cy.get('#loginpassword').type(user.password,{force: true});

    cy.get('.btn').contains('Log in').click({force: true});

    cy.get('#nameofuser').should('contain', `Welcome ${user.username}`);
  });
});
