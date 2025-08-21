const mongoose = require('mongoose');

async function conectaDB() {
    const uri = process.env.MONGODB_URI;
    if (!uri){
        console.error(`MONGODB_URI não encontrada`);
        process.exit(1);
    }

    mongoose.set("strictQuery", true);

    try {
        await mongoose.connect(uri);
        console.log(`Conectado ao MongoDB Atlas`);
    } catch (error) {
        console.error(`Erro ao conectar ao MongoDB Atlas ${error}`);
        process.exit(1);
    }
}

module.exports = conectaDB;