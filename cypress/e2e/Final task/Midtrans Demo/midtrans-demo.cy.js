/// <reference types="cypress" />

describe("Midtrans Test", function () {
    beforeEach( () => {
      cy.visit("https://demo.midtrans.com/");
    })

    it('Click Button Buy NOW', () => {
      cy.get('.buy').click()
      cy.get('.amount').should('contain.text', '20,000')
      cy.get('.cart-head').should('contain.text', 'Customer Details')
    })

    it('Should display successfully checkout', () => {
      cy.fixture('data').then(user => {
          const name = user.validuser.name
          const email = user.validuser.email 
          const phone = user.validuser.phone
          const city = user.validuser.city
          const address = user.validuser.address
          const postalCode = user.validuser.postalCode
        
      //checkout using custom commands 
      cy.validuserCheckout(name, email, phone, city, address, postalCode)

      cy.get('iframe[id="snap-midtrans"]')

      //cy.get('logo-payment-type-input-field').should('be.visible')
      //cy.contains('Virtual account').should('be.visible')
      //cy.get('[alt="BCA"]').click()
      //cy.get('[src="https://d2f3dnusg0rbp7.cloudfront.net/snap/assets/bca-906e4db60303060666c5a10498c5a749962311037cf45e4f73866e9138dd9805.svg]').click()
    })
  })
})