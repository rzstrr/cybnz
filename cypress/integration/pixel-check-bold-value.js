/// <reference types="cypress"/>

it("pixel-bold", function(){
    cy.visit("https://saucedemo.com/")      
    cy.get('input').invoke('attr', 'placeholder').should('contain', 'Username')
    cy.get('[data-test=username]').type('standard_user')
    cy.get('[data-test=password]').type('secret_sauce')
    cy.get('[data-test=login-button]').click()     
    cy.get('[data-test=add-to-cart-sauce-labs-backpack]').click()    
    cy.get('.shopping_cart_link').click()
    cy.get('[data-test=checkout]').click()    
    cy.get('[data-test=firstName]').type('Bonza')    
    cy.get('[data-test=lastName]').type('Family')    
    cy.get('[data-test=postalCode]').type('01981')
    cy.get('[data-test=continue]').click()
    cy.get('.summary_info > :nth-child(2)').should(($labels)=>{
        expect($labels).to.have.css('font-weight','700');
      })    
})
