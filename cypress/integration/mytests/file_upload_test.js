describe('file upload use cases', () => {
    
    it('simple file upload', ()=> {
        cy.visit('http://automationpractice.com/index.php?controller=contact')
        const yourFixturePath = 'image1.jpeg';
        cy.get('#fileUpload').attachFile(yourFixturePath)
        //test
    //     const special = 'file.spss';
    //     cy.fixture(yourFixturePath, 'binary')
    //     .then(Cypress.Blob.binaryStringToBlob)
    //      .then((fileContent) => {
    //   cy.get('#fileUpload').attachFile({ fileContent, fileName: 'yourFixturePath', mimeType: 'application/octet-stream', encoding: 'utf-8' });
    });
        
    it('drag and drop file upload', ()=> {
        cy.visit('https://css-tricks.com/examples/DragAndDropFileUploading/')
        const yourFixturePath = 'image1.jpeg';
        cy.get('#file').attachFile(yourFixturePath);
        cy.get('.box__success').should('contain.text','Done!')
    });

    it('multiple files upload', ()=> {
        cy.visit('https://davidwalsh.name/demo/multiple-file-upload.php')
        const yourFixturePath = 'image1.jpeg';
        const yourFixturePath1 = 'upload.txt';
        const yourFixturePath2 = 'example.json';

        cy.get('#filesToUpload')
        .attachFile(yourFixturePath)
        .attachFile(yourFixturePath1)
        .attachFile(yourFixturePath2)
        cy.get('p:nth-child(6) > strong').should('contain.text','Files You Selected:')
    });

    it('change file name while uploading', ()=> {
        cy.visit('https://davidwalsh.name/demo/multiple-file-upload.php')
        const yourFixturePath = 'image1.jpeg';
        cy.get('#filesToUpload').attachFile({ filePath: yourFixturePath, fileName: 'users.json' })
        cy.get('p:nth-child(6) > strong').should('contain.text','Files You Selected:')
    });

    it.only('Header: Verify if state of the Cart is kept', () => {
        cy.visit('http://automationpractice.com/')
        //Function which asserts state of the Cart containing 1 product.
        const testCartState = () => {
       // cy.url().should('include', 'controller=product')
        cy.get('.ajax_cart_quantity').first().invoke('text').should('equal', '1')
        }

        cy.log("hii", testCartState)

        //Invoke custom command which navigates to random product page.
       // cy.clickRandomProduct();
       cy.get('.ajax_add_to_cart_button').first().click()
        //Add selected product to cart
       // cy.get('#add_to_cart').click();
        //Select 'to continue shopping' on modal.
        //Assert state of cart (if it presents correct number).
        cy.get('.continue').click().then(testCartState);
        //Reload page 
        //and assert the Cart's state (should keep previous number of products).
        cy.reload().then(testCartState)
      });

});