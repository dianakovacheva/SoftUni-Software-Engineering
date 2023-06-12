const catalogController = require("express").Router();
const { getAll } = require("../services/gameService");

catalogController.get("/", async (req, res) => {
  const games = await getAll();
  res.render("catalog", {
    title: "Catalog Page - Gaming Team",
    user: req.user,
    games,
  });
});

module.exports = catalogController;
