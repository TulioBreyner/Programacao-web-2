// src/middlewares/errorMiddleware.js

const errorHandler = (error, req, res, next) => {
  // Loga o erro completo no console para o desenvolvedor ver
  console.error(error);

  // Trata erros de validação do Mongoose (ex: campo obrigatório faltando)
  if (error.name === 'ValidationError') {
    const messages = Object.values(error.errors).map(err => err.message);
    return res.status(400).json({ 
      error: 'Erro de validação.',
      details: messages.join(', ')
    });
  }

  // Trata erros de ID inválido do MongoDB (CastError)
  if (error.name === 'CastError' && error.kind === 'ObjectId') {
    return res.status(404).json({ error: `Recurso não encontrado. ID inválido: ${error.value}` });
  }

  // Se não for um erro conhecido, retorna um erro genérico do servidor
  return res.status(500).json({ error: 'Ocorreu um erro interno no servidor.' });
};

module.exports = errorHandler;