const gamesRouter = require("express").Router();
const { readData, writeData } = require("../utils");
const { sendUpdatedGames, sendAllGames } = require("../controllers/games");
const {
  getAllGames,
  checkIsTitleArray,
  updateGamesArray,
  updateGamesFile,
  deleteGame,
  findGameById,
} = require("../middlewares/games");

gamesRouter.get("/games", getAllGames, sendAllGames);

gamesRouter.delete(
  "/games/:id",
  getAllGames,
  findGameById,
  deleteGame,
  updateGamesFile,
  sendUpdatedGames
);

gamesRouter.post(
  "/games",
  getAllGames,
  checkIsTitleArray,
  updateGamesArray,
  updateGamesFile,
  sendUpdatedGames
);

module.exports = gamesRouter;
