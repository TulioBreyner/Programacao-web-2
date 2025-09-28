// src/middlewares/logMiddleware.js

const logRequests = (req, res, next) => {
  const { method, originalUrl } = req;
  const timestamp = new Date().toISOString();
  
  // Exibe a informação no console do servidor
  console.log(`[${timestamp}] ${method} ${originalUrl}`);
  
  // Passa para o próximo middleware ou para a rota
  next();
};

module.exports = logRequests;