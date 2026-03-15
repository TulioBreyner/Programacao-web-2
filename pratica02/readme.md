## 🚀 Funcionalidades Implementadas

A API é focada na gestão completa (CRUD) de uma **Coleção de Games**, com os seguintes endpoints:

| Método | Endpoint | Descrição |
| :--- | :--- | :--- |
| **POST** | `/games` | Cria um novo item. |
| **GET** | `/games` | Lista todos os itens existentes. |
| **GET** | `/games/:id` | Retorna um item específico pelo seu ID. |
| **PUT** | `/games/:id` | Atualiza completamente um item existente. |
| **DELETE** | `/games/:id` | Remove um item do sistema. |

### Detalhes

* **Validação de Dados:** Todas as rotas de criação e atualização utilizam middlewares para garantir que os dados fornecidos sejam válidos.
* **Respostas Padronizadas:** A API retorna respostas JSON claras e utiliza códigos de status HTTP apropriados para sucesso (`200`, `201`) e erro (`400`, `404`, `500`).

---

## 🛡️ Explicação dos Middlewares Criados

Foram desenvolvidos middlewares essenciais para centralizar a lógica de validação e o tratamento de exceções.

### 1. Middleware logMiddleware

* Ele registra no console do servidor informações sobre cada requisição recebida (hora, método HTTP, e URL), garantindo que a requisição prossiga para o seu destino final com o uso de next()

### 2. Middleware de Tratamento de Erros Centralizado (`errorHandler`)

* Responsável por capturar qualquer erro que ocorra em qualquer camada (rotas, controllers ou serviços), classificá-los e retornar uma resposta formatada e apropriada (com o código de status HTTP correto) para o cliente.

---

## 🛠️ Instruções para Rodar o Projeto

### Pré-requisitos

Você precisará ter o **Node.js** e o **npm** (ou yarn) instalados em sua máquina.

### 1. Clonar o Repositório

```bash
git clone [https://github.com/TulioBreyner/atividade_02_pi2.git](https://github.com/TulioBreyner/atividade_02_pi2.git)
cd atividade_02_pi2
```

---

### 2. Configurar Variáveis de Ambiente

O projeto utiliza variáveis de ambiente para configuração, conforme indicado no arquivo **`.env.example`**.

1.  Crie um novo arquivo chamado **`.env`** na raiz do projeto.
2.  Copie o conteúdo do `.env.example` para dentro do novo arquivo `.env` e configure-o conforme necessário.

```bash
MONGODB_URI=""
USER=""
PASS=""
```

---

### 3. Instalar Dependências

Instale todas as dependências do projeto definidas no `package.json` utilizando o npm ou yarn:

```bash
npm install
# ou
yarn install
```

---

### 4. Execução do Projeto

Inicie a aplicação utilizando os comandos abaixo. 
```bash
cd ./src/
node ./server.js
```

Após a execução bem-sucedida, a API estará acessível em `http://localhost:3000`.
