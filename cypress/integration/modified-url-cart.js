/// <reference types="cypress"/>

it("cart url", function(){
    cy.visit("https://saucedemo.com/")  
    cy.get('[data-test=username]').type('standard_user')
    cy.get('[data-test=password]').type('secret_sauce')
    cy.get('[data-test=login-button]').click()     
    cy.get('[data-test=add-to-cart-sauce-labs-backpack]').click()
    cy.get('[data-test=add-to-cart-sauce-labs-bike-light]').click()
    cy.get('.shopping_cart_link').click()
    cy.visit("https://www.saucedemo.com/inventory-item.html?id=100") 
})
