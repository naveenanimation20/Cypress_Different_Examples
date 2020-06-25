describe('back and fwd button simulate', ()=>{

    it('back-fwd test', ()=>{

        cy.visit('https://www.orangehrm.com/orangehrm-30-day-trial/')
        cy.get('Accept Cookies').should((($text)=>{
            const text = $text.text()
            console.log(text)
        }))
        cy.contains('Accept Cookies').click()
        cy.get('#Form_submitForm_subdomain').type('naveenautomation')
        .should('have.value', 'naveenautomation')

        cy.get('#Form_submitForm_Country').select('Andorra')
        .should('have.value','Andorra')


    })


})