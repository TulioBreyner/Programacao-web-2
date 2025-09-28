const express = require('express');
const cors = require('cors');
require('dotenv').config();

const connectDB = require('./db');
const gameRoutes = require('./routes/games.routes');
const logRequests = require('./middlewares/logMiddleware');
const errorHandler = require('./middlewares/errorMiddleware');


const app = express();
connectDB();

// Middlewares
app.use(cors());
app.use(express.json());
app.use(logRequests);

// Rota inicial para health-check (verificar se a API está no ar)
app.get('/', (req, res) => {
  res.status(200).json({ message: 'API de Games está funcionando!' });
});

// Importa e utiliza as rotas de games com o prefixo /games
app.use('/games', gameRoutes);

app.use(errorHandler);

const PORT =  3000;

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
  console.log(`Acesse a rota de health-check em http://localhost:${PORT}`);
});