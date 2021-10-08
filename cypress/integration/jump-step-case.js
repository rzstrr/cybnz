/// <reference types="cypress"/>

it("jump case", function(){
    cy.visit("https://saucedemo.com/")  
    cy.get('[data-test=username]').type('standard_user')
    cy.get('[data-test=password]').type('secret_sauce')
    cy.get('[data-test=login-button]').click()     
    cy.get('[data-test=add-to-cart-sauce-labs-backpack]').click()
    cy.get('[data-test=add-to-cart-sauce-labs-onesie]').click()
    cy.visit("https://saucedemo.com/checkout-step-two.html")    
})
