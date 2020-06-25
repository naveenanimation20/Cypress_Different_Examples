describe('drop down feature', ()=>{

    it.skip('with Select tag test', ()=>{

        cy.visit('https://www.orangehrm.com/orangehrm-30-day-trial/')
        cy.get('#Form_submitForm_Country')
        .select('India')
        .should('have.value','India')

        cy.get('#Form_submitForm_Industry')
        .select('Automotive')
        .should('have.value','Automotive')


    })

    it.skip('Google Search Test', ()=>{

        cy.visit('https://www.google.com')
        cy.get("[name='q']").type('cypress')

        // cy.get('.erkvQe')
        // .find('li span')
        // .contains('cypress tutorial').click()

        cy.get('.erkvQe li span').contains('cypress tree').click()


    })

    it('automation Ecomm Search Test', ()=>{

        cy.visit('http://automationpractice.com/index.php')
        // cy.get('#search_query_top').type('dress')

        // cy.get('.ac_results')
        // .find('li')
        // .contains('T-shirts').click()

        //cy.get('.erkvQe li span').contains('cypress tutorial').click()
        cy.get('.ajax_add_to_cart_button').first().click();

        //Close modal which confirms that product has been added.
        cy.get('.cross').click();
        cy.wait(5000)
 
        //Get drop-down cart block and verify if by default it is hidden.
        //Force the drop-down block to be visible by invoke('show').
        cy.get('.cart_block').should('be.hidden').invoke('show');
        cy.wait(3000)
 
        //Click on check out button.
        cy.get('#button_order_cart').click();
       
        //Assert redirection to new url.
        cy.url().should('include', 'controller=order');

    })


    it('mouse hover', ()=>{

        cy.visit('https://www.spicejet.com/')
        
        cy.contains('Login / Signup').trigger('mouseover')
        cy.contains('SpiceClub Members').trigger('mouseover')
        cy.contains('Sign up').click()

    })



})