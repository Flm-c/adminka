const express = require("express");
const app = express();
const fs = require("fs").promises;
const path = require("path");

const PORT = 3000;

app.use(express.static(path.join(__dirname, "public")));

app.get("/", async (req, res) => {
  await fs.readFile("./public/index.html").then((data) => {
    res.header("Content-Type", "text/html");
    res.send(data);
  });
});

app.listen(PORT, () => {
  console.log(`Сервер запущен на ${PORT} порту`);
});
