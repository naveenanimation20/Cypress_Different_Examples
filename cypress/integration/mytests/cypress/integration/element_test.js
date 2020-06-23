
describe('launch my app', ()=> {
    
    it('app testing', ()=>{

        cy.visit('https://www.freshworks.com/')
        cy.contains('Platform')
        cy.contains('Platform').click()
        cy.url().should('include', '/platform')
        
        cy.get('div.align-center.mb-lg h1:nth-of-type(2)')
        .should('be.visible')
        .and('contain', 'Our platform')
        .and('have.length',1)

        cy.get('.footer-nav li').should('have.length',35)

        cy.get('.footer-nav li').find("a[href*='footer']").should('have.length', 13)

        cy.get('.footer-nav li').find("a[href*='footer']")

        cy.go('back', {timeout:4000})
        cy.wait(2000)
        cy.go('forward')
        cy.go(-1)
        cy.go(1)

    })

});
    