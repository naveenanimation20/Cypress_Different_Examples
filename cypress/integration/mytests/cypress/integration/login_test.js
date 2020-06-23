
describe('auto practice features', ()=>{


    before(()=>{
        cy.visit('http://automationpractice.com/index.php')
        cy.login('naveenanimation30@gmail.com', 'Test@1234')
    })

    beforeEach(() => {
    });

    it('should login', () => {
        cy.url().should('include','controller=my-account')
        cy.get('.myaccount-link-list a').should('have.length',5)
    });

    it('should navigate to home page', () => {
        cy.get('.icon-chevron-left').last().click().url().should('include','index.php')
    });

    it('should search', ()=>{
        cy.search('Dress')
    })




})