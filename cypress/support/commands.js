Cypress.Commands.add('fillMandatoryFieldsAndSubmit', function(){
cy.get('#firstName').type('Marcelo')
cy.get('#lastName').type('Camargo')
cy.get('#email').type('celo1910@gmail.com')
cy.get('#open-text-area').type('teste', {delay: 0})
cy.get('button[type="submit"]').click()
})