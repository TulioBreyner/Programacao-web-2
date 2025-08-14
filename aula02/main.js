const express =  require('express');
const app = express();
const port = 3000;

// middleware
app.use(express.json());

// simular persistencia na memoria do servidor com um array
let usuarios = [];
let idCounter = 1;

// rota POST
app.post('/usuarios', (req, res) => {
    const { nome, idade } = req.body;
    const novoUsuario = {id: idCounter++, nome, idade};
    usuarios.push(novoUsuario);  
    res.status(201).json(novoUsuario);

})

// rota para listar todos usuarios (GET)
app.get('/usuarios', (req, res) => {
    res.json(usuarios);
})

// rota para atualizar usuario (PUT)
app.put('/usuarios/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const { nome, idade } = req.body;
    const usuario = usuarios.find(u => u.id === id);
    if (!usuario) {
        return res.status(404).json(error, `Usuario com id ${id} não encontrado`);
    }
    usuario.nome = nome;
    usuario.idade = idade;
    res.json(usuario);
})

// rota para atualizar usuario (PATCH)
app.patch('/usuarios/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const { nome, idade } = req.body;
    const usuario = usuarios.find(u => u.id === id);
    if (!usuario) {
        return res.status(404).json({ error: `Usuario com id ${id} não encontrado` });
    }
    if (nome !== undefined) usuario.nome = nome;
    if (idade !== undefined) usuario.idade = idade;
    res.json(usuario);
})

// rota para deletar usuario (DELETE)
app.delete('/usuarios/:id', (req, res) => {
    const id = parseInt(req.params.id);
    usuarios = usuarios.filter(u => u.id !== id);
    return res.status(204).send()
})

// subir servidor
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
})