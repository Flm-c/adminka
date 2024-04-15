const gamesRouter = require("express").Router();

const getAllGames = async (req, res) => {};
const deleteGame = async (req, res) => {};
const addGame = async (req, res) => {};

gamesRouter.get("/games", getAllGames);

gamesRouter.delete("/games/:id", deleteGame);

gamesRouter.post("/games", addGame);

module.exports = gamesRouter;
