const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

let produtos = [];
let idCounter = 1;

// rota POST 
app.post('/produtos', (req, res) => {
    const { nome, preco } = req.body;
    const novoProduto = {id: idCounter++, nome, preco};
    produtos.push(novoProduto);
    res.status(201).json(novoProduto);
})

// rota GET para todos os produtos
app.get('/produtos', (req, res) => {
    res.json(produtos)
})

// rota GET para produto especifico
app.get('/produtos/:id', (req, res) => {
    const id = parseInt(req.params.id);
    let produto = produtos.find(p => p.id === id);
    if (!produto) return res.status(404).json({erro: `Produto id ${id} não encontrado`});
    res.json(produto);
})

// rota para atualizar produto (PUT)
app.put('/produtos/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const { nome, preco } = req.body;
    const produto = produtos.find(u => u.id === id);
    if (!produto) {
        return res.status(404).json(error, `produto com id ${id} não encontrado`);
    }
    produto.nome = nome;
    produto.preco = preco;
    res.json(produto);
})

// rota para atualizar produto (PATCH)
app.patch('/produtos/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const { nome, preco } = req.body;
    const produto = produtos.find(u => u.id === id);
    if (!produto) {
        return res.status(404).json({ error: `produto com id ${id} não encontrado` });
    }
    if (nome !== undefined) produto.nome = nome;
    if (preco !== undefined) produto.preco = preco;
    res.json(produto);
})

// rota para deletar produto (DELETE)
app.delete('/produtos/:id', (req, res) => {
    const id = parseInt(req.params.id);
    produtos = produtos.filter(u => u.id !== id);
    return res.status(204).send()
})

// subir servidor
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
})