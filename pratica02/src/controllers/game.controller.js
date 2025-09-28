// ./controllers/game.controller.js
const Game = require('../models/Game')

exports.createGame = async (req, res) => {
    try {
        const { titulo, genero, plataforma, lancamento } = req.body;

        const newGame = new Game({
            titulo, genero, plataforma, lancamento
        });
        const savedGame = await newGame.save();

        res.status(201).json({message: 'Game criado com sucesso!', game: savedGame});
    } catch (error) {
        res.status(400).json({erorr: 'Erro ao criar game', details: error.message});
    }
}

exports.getAllGames = async (req, res) =>{
    try {
        const games = await Game.find();
        res.status(200).json(games);
    } catch (error) {
        res.status(500).json({error: 'Erro ao buscar games', details: error.message});
    }
}

exports.getGameById = async (req, res) => {
    try {
        const game = await Game.findById(req.params.id);

        if (!game){
            res.status(404).json({message: 'Game não encontrado'});
        }

        res.status(200).json(game);
    } catch (error) {
        res.status(500).json({error: 'Erro ao buscar game por id', details: error.message});
    }
}

exports.updateGame = async (req, res) => {
    try {
        const updatedGame = await Game.findByIdAndUpdate(
            req.params.id,
            req.body,
            {
                new: true,
                runValidators: true,
            }
        );

        if (!updatedGame) {
            return res.status(404).json({message: 'Game não encontrado para atualização'});
        }

        res.status(200).json({message: 'Game atualizado!', game: updatedGame});
    } catch (error) {
        res.status(400).json({error: 'Erro ao atualizar game', details: error.message});
    }
}

exports.deleteGame = async (req, res) => {
    try {
        const deletedGame = await Game.findByIdAndDelete(req.params.id);

        if (!deletedGame) {
            return res.status(404).json({message: 'Game não encontrado para exclusão'});
        }

        res.status(200).json({message: 'Game deletado!'});
    } catch (error) {
        res.status(500).json({message: 'Erro ao deletar game', details:error.message});
    }
}