# API Simples de Produtos (CRUD)

Este projeto é uma API RESTful básica para gerenciamento de produtos (operações CRUD: Criar, Ler, Atualizar, Deletar). Ele foi construído com **Node.js** e **Express**.

Os dados são armazenados em um array em memória, o que significa que **todos os dados serão perdidos** sempre que o servidor for reiniciado.

## 🚀 Como Rodar o Projeto

### Pré-requisitos

* [Node.js](https://nodejs.org/) (versão 12 ou superior)
* npm (geralmente instalado com o Node.js)

### Passos

1.  **Crie a pasta do projeto:**
    ```bash
    mkdir minha-api-produtos
    cd minha-api-produtos
    ```

2.  **Salve o código:**
    Salve o código fornecido em um arquivo chamado `index.js` dentro desta pasta.

3.  **Inicialize o projeto (crie o `package.json`):**
    ```bash
    npm init -y
    ```

4.  **Instale a dependência (Express):**
    ```bash
    npm install express
    ```

5.  **Inicie o servidor:**
    ```bash
    node index.js
    ```

6.  **Pronto!** O servidor estará rodando em `http://localhost:3000`.

## 📦 Rotas Implementadas

Aqui está um detalhamento de todos os endpoints disponíveis na API.

| Método | Rota | Descrição | Status Codes | Corpo da Resposta (Exemplo) |
| :--- | :--- | :--- | :--- | :--- |
| `POST` | `/produtos` | Cria um novo produto. | **201 Created**: Produto criado com sucesso. | `{ "id": 1, "nome": "Notebook", "preco": 3500 }` |
| `GET` | `/produtos` | Lista todos os produtos cadastrados. | **200 OK**: Retorna um array de produtos (pode ser vazio). | `[{ "id": 1, ... }, { "id": 2, ... }]` |
| `GET` | `/produtos/:id` | Busca um produto específico pelo seu `id`. | **200 OK**: Produto encontrado. <br> **404 Not Found**: Produto com o ID não foi encontrado. | `{ "id": 1, "nome": "Notebook", "preco": 3500 }` |
| `PUT` | `/produtos/:id` | Atualiza **completamente** um produto. (Requer `nome` e `preco` no body). | **200 OK**: Produto atualizado. <br> **404 Not Found**: Produto com o ID não foi encontrado. | `{ "id": 1, "nome": "Notebook Dell", "preco": 4000 }` |
| `PATCH` | `/produtos/:id` | Atualiza **parcialmente** um produto. (Pode enviar só `nome` ou só `preco`). | **200 OK**: Produto atualizado. <br> **404 Not Found**: Produto com o ID não foi encontrado. | `{ "id": 1, "nome": "Notebook Dell", "preco": 3500 }` |
| `DELETE` | `/produtos/:id` | Deleta um produto específico pelo seu `id`. | **204 No Content**: Produto deletado (ou não encontrado). | (Nenhum corpo de resposta) |
