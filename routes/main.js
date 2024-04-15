const mainRouter = require("express").Router();
const fs = require("fs").promises;

mainRouter.get("/", async (req, res) => {
  await fs.readFile("./public/index.html").then((data) => {
    res.header("Content-Type", "text/html");
    res.send(data);
  });
});

module.exports = mainRouter;
