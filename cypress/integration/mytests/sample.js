describe('sample test', ()=>{

    it('does not match', ()=>{

        expect(true).to.equal(true)

    })

    it("Product search - verify if autocomplete drop-down list for search input field is selectable", () => {

        // cy.visit('http://automationpractice.com/index.php')
        // //Get product search input field
        // cy.get('#search_query_top').type("dress");
 
        // //Get whole autocomplete drop-down list element
        // //And find all <li> tags within it
        // //Check if there is <li> tag which contains "Dress" text
        // //Click on the returned element
        // cy.get(".ac_results").find("li").contains("Dress").click()
 
        // //Assert url to verify if click on drop-down element 
        // //Redirects to expected page
        // cy.url().should('include', 'controller=product')

        cy.visit('https://www.google.com/')

        cy.get("[name='q']").type('cypress')
        cy.get('.erkvQe').find('li span').contains('cypress vine').click()

       
    })


})