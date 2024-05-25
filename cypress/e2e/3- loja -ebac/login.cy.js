///<reference types="cypress"/>

describe ('Funcionalidade: login' , ()=> {

it ('Deve fazer login com sucesso', ()=>{
    cy.visit('http://lojaebac.ebaconline.art.br/my-account/')
    cy.get('#username').type('marco@teste.com')
    cy.get('#password').type('67255168')
    cy.get('.woocommerce-form > .button').click()

    cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain','Olá, marco (não é marco? Sair)')
})

})