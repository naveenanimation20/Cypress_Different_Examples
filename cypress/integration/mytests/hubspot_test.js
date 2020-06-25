beforeEach(()=>{
    cy.visit('https://app.hubspot.com/login' ,{failOnStatusCode: false});
})

it('hub login', ()=>{
  cy.get('input#username').type('naveenanimation30@gmail.com')
  cy.get('input#password').type('Test@1234')
  cy.get('#loginBtn').click()

  
})