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

    it.only('Preenche dos campos obrigatórios e envia o formulário', () => {

        cy.get('#firstName').should('be.visible').type('Victor')
        cy.get('#lastName').should('be.visible').type('Leão')
        cy.get('input[type="email"]').should('be.visible').click().focused().type('leao@teste.com', { force: true })
        cy.get('#open-text-area').should('be.visible').type('Teste')
        cy.get('button[type="submit"]').should('be.visible').click()
        cy.get('.success').should('be.visible').invoke('text').then((text) => {
            expect(text.trim()).to.equal('Mensagem enviada com sucesso.');
        });
    });

    it('Marca ambos os checkboxes', () => {
        cy.get('input[type="checkbox"]')
            .check()
            .should('be.checked')
            .last()
            .uncheck()
            .should('be.not.checked');
    });

    it('Adicionar um anexo', () => {
        cy.get('#file-upload')
            .should('not.have.value')
            .selectFile('lessons/_course-structure_.md')
            .then(($input) => {
                expect($input[0].files[0].name).equal('_course-structure_.md');
            })
        // .should(($input) => {
        //     // console.log($input);
        //     expect($input[0].files[0].name).equal('_course-structure_.md');
        // });
    });

    it('Adicionar um anexo usando drag-drop', () => {
        cy.get('#file-upload')
            .should('not.have.value')
            .selectFile('lessons/_course-structure_.md', { action: 'drag-drop' })
            .then(($input) => {
                expect($input[0].files[0].name).equal('_course-structure_.md');
            })
        // .should(($input) => {
        //     // console.log($input);
        //     expect($input[0].files[0].name).equal('_course-structure_.md');
        // });
    });

    it('Seleciona um arquivo usando uma Fixture para qual foi dada um alias', () => {
        cy.fixture("example.json").as('sampleFile')
        cy.get('#file-upload')
            .selectFile('@sampleFile')
            .then(($input) => {
                expect($input[0].files[0].name).equal('example.json');
            })

    });

    it('Verifica que a política de privacidade abre em outra aba sem a necessidade de um clique', () => {
        cy.get('#privacy a')
            .should('have.attr', 'target', '_blank');
    });

    it('Acessa a página "Política de Privacidade" removendo o target e então clicando no link', () => {
        cy.get('#privacy a')
            .invoke('removeAttr', 'target')
            .click()
            .title().should('eq', 'Central de Atendimento ao Cliente TAT - Política de privacidade')
    });

});