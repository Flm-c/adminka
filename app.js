const express = require("express");
const app = express();
const path = require("path");
const bodyParser = require("body-parser");

const mainRouter = require("./routes/main");
const gamesRouter = require("./routes/games");
const cors = require("./middlewares/cors");

const PORT = 3000;

app.use(
  cors,
  bodyParser.json(),
  express.static(path.join(__dirname, "public")),
  mainRouter,
  gamesRouter
);

app.get("/games/:id", (req, res) => {
  //кодд, который обрабатывает игру с :id == 1-8
});

app.listen(PORT, () => {
  console.log(`Сервер запущен на ${PORT} порту`);
});
