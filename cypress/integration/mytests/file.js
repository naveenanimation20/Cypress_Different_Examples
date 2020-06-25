describe('Contact Form Page tests', () => {
    it.only("Send message with file uploaded", () => {
        cy.visit('http://automationpractice.com/')
      //Navigate from Main Page to Contact Form Page.
      cy.contains('Contact us').click();
      //Check redirection by asserting url. 
      cy.url().should('include', 'controller=contact')
      //Fill in all fields. 
      cy.get('#message').type('messsssage');
      cy.get('#id_contact').select('Webmaster');
      cy.get('#email').type('test@test.pl');
      cy.get('#id_order').type('xxxx');
      //Before uploading file assert empty input filed text placeholder. 
      cy.get('.filename').should('contain', 'No file selected');
      //Get file to upload from fixture. 
      //Get file upload input field. 
      //Provide its properties. 
      
      // const yourFixturePath = 'image1.jpeg';
      // cy.get('#fileUpload').attachFile(yourFixturePath);

      const special = 'upload';
      cy.fixture(special, 'binary')
      .then(Cypress.Blob.binaryStringToBlob)
      .then((fileContent) => {
     cy.get('#fileUpload').attachFile({ fileContent, fileName: 'special', mimeType: 'application/octet-stream', encoding: 'utf-8' });
})
    
      //Check if file is uploaded by asserting input filed text. 
      cy.get('.filename').should('contain', 'image1.jpeg');
      //Submit form. 
      cy.get("#submitMessage").click();
      //Assert if url is the same 
      cy.url().should('include', 'controller=contact')
      cy.get('.alert').should('contain', 'Your message has been successfully sent to our team.');
    })

    it('drag n drop file upload', () => {
        cy.visit('https://css-tricks.com/examples/DragAndDropFileUploading/')
        const yourFixturePath = 'image1.jpeg';
        cy.get('#file').attachFile(yourFixturePath);
        cy.get('.box__success').should('contain.text','Done!')
    });


    it('multiple files upload', () => {
      cy.visit('https://davidwalsh.name/demo/multiple-file-upload.php')
      const yourFixturePath = 'image1.jpeg';
      const yourFixturePath1 = 'example.json';
      cy.get('#filesToUpload')
      .attachFile(yourFixturePath)
      .attachFile(yourFixturePath1)
      cy.get('p:nth-child(6) > strong').should('contain.text','Files You Selected:')
  });

  it('chnage file name', () => {
    cy.visit('https://davidwalsh.name/demo/multiple-file-upload.php')
    const yourFixturePath = 'image1.jpeg';
    cy.get('#filesToUpload')
    .attachFile({ filePath: yourFixturePath, fileName: 'image22.jpeg' });
    cy.get('#fileList > li:nth-child(1)').should('contain.text','image22.jpeg')
});


  })