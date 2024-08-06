describe('Sign Up page', () => {
  const user = {
    username: 'Misha17',
    password: '12345678'
  };

  before(() => {
    cy.visit('https://www.demoblaze.com/');
  });
  it('should provide an ability to register', () => {
    cy.get('#signin2').click();
    cy.get('#sign-username').type(user.username,{force: true});
    cy.get('#sign-password').type(user.password,{force: true});

    cy.get('.btn').contains('Sign up').click({force: true});

    cy.on('window:alert', (text) => {
      expect(text).to.eq('Sign up successful.')                             
    })

  });
});
