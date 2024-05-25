///<reference types="cypress"/>

describe ('Funcionalidade: login' , ()=> {

beforeEach(() => {
    cy.visit('http://lojaebac.ebaconline.art.br/my-account/')
});

afterEach(() => {
    cy.screenshot()
});

it ('Deve fazer login com sucesso', ()=>{
    cy.get('#username').type('marco@teste.com')
    cy.get('#password').type('67255168')
    cy.get('.woocommerce-form > .button').click()
    cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain','Olá, marco (não é marco? Sair)')
})

it('Deve exibir mensagem de erro ao inseir usuário inválido', () => {
    cy.get('#username').type('maco@teste.com')
    cy.get('#password').type('67255168')
    cy.get('.woocommerce-form > .button').click()
    cy.get('.woocommerce-error').should('exist')
});

it('Deve exibir mensagem de erro ao inserir senha inválida', () => {
    cy.get('#username').type('marco@teste.com')
    cy.get('#password').type('652ee55168')
    cy.get('.woocommerce-form > .button').click()
    cy.get('.woocommerce-error').should('contain','Erro: A senha fornecida para o e-mail marco@teste.com está incorreta. Perdeu a senha?')
    cy.get('.woocommerce-error').should('exist')
});

})