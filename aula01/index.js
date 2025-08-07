const express = require('express');
const app = express();

const port = 3000;

app.get('/', (req, res) => {
    res.json({message: 'Main route'});
});

// rota com parametro na URL
app.get('/teste/:nome', (req, res) => {
    const nome = req.params.nome;
    res.send({message: `Hello ${nome}`});
});

// rota com parametro  na query string
app.get('/pesquisa', (req, res) => {
    const nome = req.query.nome;
    const sobrenome = req.query.sobrenome;
    const menssagem = `${nome} ${sobrenome}`;
    res.json({message: menssagem});
    // exemplo de rota
    // http://localhost:3000/pesquisa?nome=João&sobrenome=Silva
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});