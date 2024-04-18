const gamesRouter = require("express").Router();
const { readData, writeData } = require("../utils");
const { getAllGames, deleteGame, addGame } = require("../controllers/games");

gamesRouter.get("/games", getAllGames);

gamesRouter.delete("/games/:id", deleteGame);

gamesRouter.post("/games", addGame);

module.exports = gamesRouter;
