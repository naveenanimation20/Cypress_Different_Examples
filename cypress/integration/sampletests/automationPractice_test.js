
describe('automation practice features testing', ()=>{

    before(()=>{
        cy.visit('http://automationpractice.com/')
        cy.login('naveenanimation30@gmail.com', 'Test@1234')
    })

    it('should login', () => {
        cy.url().should('include','controller=my-account')
        cy.get('.myaccount-link-list a').should('have.length', 5)
    });

    it('should navigate to home page', ()=>{
        cy.get('.icon-chevron-left').last().click().url().should('include','index.php')
    })

    it('should search', ()=> {
        cy.search('Dress')
        cy.get('.lighter').should('contain.text','Dress')
    });
        







})