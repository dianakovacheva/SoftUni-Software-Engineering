const catalogController = require("express").Router();
const { getAll, getById } = require("../services/gameService");

catalogController.get("/", async (req, res) => {
  const games = await getAll();
  res.render("catalog", {
    title: "Catalog Page - Gaming Team",
    user: req.user,
    games: games,
  });
});

catalogController.get("/details/:id", async (req, res) => {
  const game = await getById(req.params.id);
  game.isOwner = game.owner.toString() == req.user?._id.toString();

  res.render("details", {
    title: "Details Page",
    user: req.user,
    game,
  });
});

module.exports = catalogController;
