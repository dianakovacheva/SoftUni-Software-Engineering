const { createGameOffer, getById } = require("../services/gameService");
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
      user: req.user,
    });
  }
});

gameController.get("/details/:id", async (req, res) => {
  const game = await getById(req.params.id);

  if (
    game.owner.toString() != req.user._id.toString() &&
    game.boughtBy.map((x) => x.toString()).includes(req.user._id.toString()) ==
      false
  ) {
    await boughtByUser(req.params.id, req.user._id);
  }

  res.redirect(`./${req.params.id}`);
});

module.exports = gameController;
