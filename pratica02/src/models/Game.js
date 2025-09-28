// ./models/Games.js
// Schema para games
const mongoose = require('mongoose');

const gameSchema = new mongoose.Schema(
    {
        titulo: {
            type: String,
            required: [true, "Este campo é obrigatório"],
            minlength: [2, "Titulo muito curto"],
            maxlength: [100, "Titulo muito longo"]
        },
        genero: {
            type: String,
            required: [true, "Este campo é obrigatório"],
        },
        plataforma: {
            type: String,
            required: [true, "Este campo é obrigatório"],
        },
        lancamento: {
            type: Number,
            required: false,
        },
        createdAt: {
            type: Date,
            default: Date.now
        }
    }
)

const Game = mongoose.model("Game", gameSchema);
module.exports = Game