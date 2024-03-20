/// <reference types="cypress" />

describe('Central de Atendimento ao Cliente TAT', () => {

    beforeEach(() => {
        // ! Aqui a gente irá recarregar a url para cada teste.
        cy.visit('http://127.0.0.1:5500/src/index.html');
    })

    it('Verifica o título da aplicação', () => {
        // ? Fiquei na dúvida em qual seria o melhor para empregar.
        // cy.title().should('be.eq', 'Central de Atendimento ao Cliente TAT');
        cy.title().then((element) => {
        expect(element).equal('Central de Atendimento ao Cliente TAT');
        });
    });

    it('Deve selecionar a opção YouTube com sucesso', () => {
        cy.get('#product').select('YouTube');
        cy.get('#product').then((selectElement) => {
            const selectedOption = selectElement.find('option:selected');
            const selectedText = selectedOption.text();
            expect(selectedText).to.equal('YouTube');
        });
    });

    it('Preenche dos campos obrigatórios e envia o formulário', () => {
        cy.get('#firstName').type('Victor')
        cy.get('#lastName').type('Leão')
        cy.get('#email').type('leao@teste.com')
        cy.get('#open-text-area').type('Teste')
        cy.get('button[type="submit"]').click()
        cy.get('.success').invoke('text').then((text) => {
            expect(text.trim()).to.equal('Mensagem enviada com sucesso.');
        });
    });
    
});