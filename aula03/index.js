const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const conectaDB = require('./db');
const alunosRouter = require('./routes/alunos.routes') // Rotas

const port = 3000;
const app = express();
app.use(express.json());

dotenv.config();

conectaDB(); // conexão com o MongoDB

app.get('/', (req, res) => {
    res.json({message: "hello world"});
});

// rotas
app.use('/alunos', alunosRouter);

// Handler de erros
app.use((err, req, res, next) => {
    console.error(`Erro: ${err}`);
    // CastError
    if (err.name === "CastError"){
        return res.status(400).json({erro: "ID inválido"});
    }

    // Erro de validação
    if (err.name === "ValidationError"){
        return res.status(400).json({erro: "Validação falhou", detalhes: err.errors});
    }

    res.status(500).json({erro: "Erro interno do servidor"});
});

app.listen(port, () => {
    console.log(`Servidor na porta ${port}`)
});