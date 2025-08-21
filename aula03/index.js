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
})

// rotas
app.use('/alunos', alunosRouter);

app.listen(port, () => {
    console.log(`Servidor na porta ${port}`)
})