
describe('hub spot page feature', ()=>{


    it('handle hub spot login test', ()=>{

        cy.visit('https://app.hubspot.com/login', {failOnStatusCode: false})
        cy.get('#username').type('naveen@gmail.com')
        cy.get('#password').type('naveen@g123')
        cy.get('#loginBtn').click()

    
    })



})

