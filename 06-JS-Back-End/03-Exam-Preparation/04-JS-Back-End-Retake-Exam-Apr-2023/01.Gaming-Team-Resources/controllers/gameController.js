const { createGameOffer } = require("../services/gameService");
const { parseError } = require("../util/parser");

const gameController = require("express").Router();

gameController.get("/", (req, res) => {
  res.render("create", {
    title: "Create Page - Gaming Team",
    user: req.user,
  });
});

gameController.post("/", async (req, res) => {
  const game = {
    platform: req.body.platform,
    name: req.body.name,
    imageUrl: req.body.imageUrl,
    price: req.body.price,
    genre: req.body.genre,
    description: req.body.description,
    owner: req.user._id,
  };

  try {
    await createGameOffer(game);
    res.redirect("/catalog");
  } catch (error) {
    res.render("create", {
      title: "Create Game",
      errors: parseError(error),
      body: game,
    });
  }
});

module.exports = gameController;
