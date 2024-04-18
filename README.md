# Documentação dos Testes Cypress

Este documento descreve os testes automatizados realizados na aplicação "Central de Atendimento ao Cliente TAT" usando o framework Cypress.

## Pré-requisitos

Certifique-se de ter o Cypress instalado globalmente ou localmente no seu projeto.

## Executando os Testes

Para executar os testes, basta executar o seguinte comando no terminal:

`npx cypress open`

Isso abrirá a interface do Cypress, onde você poderá selecionar e executar os testes individualmente ou todos de uma vez.

## Descrição dos Testes

### 1. Verifica o título da aplicação

Este teste verifica se o título da página corresponde ao esperado.

### 2. Deve selecionar a opção YouTube com sucesso

Testa se é possível selecionar a opção "YouTube" em um campo de seleção.

### 3. Preenche dos campos obrigatórios e envia o formulário

Este teste preenche os campos obrigatórios de um formulário e verifica se a mensagem de sucesso é exibida após o envio.

### 4. Marca ambos os checkboxes

Testa se é possível marcar e desmarcar checkboxes.

### 5. Adicionar um anexo

Verifica se é possível adicionar um anexo a partir de um arquivo selecionado.

### 6. Adicionar um anexo usando drag-drop

Testa a funcionalidade de adicionar um anexo arrastando e soltando um arquivo.

### 7. Seleciona um arquivo usando uma Fixture para qual foi dada um alias

Verifica se é possível selecionar um arquivo usando uma Fixture previamente definida.

### 8. Verifica que a política de privacidade abre em outra aba

Testa se o link para a política de privacidade abre em outra aba.

### 9. Acessa a página "Política de Privacidade" removendo o target e então clicando no link

Testa se é possível acessar a página de política de privacidade removendo o atributo 'target' do link.

## Conclusão

Estes testes fornecem uma cobertura básica das principais funcionalidades da aplicação "Central de Atendimento ao Cliente TAT". Eles são executados automaticamente para garantir que a aplicação esteja funcionando conforme o esperado.
