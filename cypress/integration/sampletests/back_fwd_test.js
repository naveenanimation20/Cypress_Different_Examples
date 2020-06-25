describe('back and fwd button simulate', ()=>{

    it('back-fwd test', ()=>{

        cy.visit('https://www.freshworks.com/')
        cy.contains('Platform').click()
        .go('back')
        .go('forward') 
        .contains('Platform')       

    //     cy.go('back')
    //     //cy.go(-1)
    //     cy.wait(200)
    //    cy.go('forward')
    //    //cy.go(1)




    })


})