const {
  createGameOffer,
  getGameById,
  boughtByUser,
} = require("../services/gameService");

const { parseError } = require("../util/parser");

const gameController = require("express").Router();

gameController.get("/details/:id/buy", async (req, res) => {
  const game = await getGameById(req.params.id);

  if (!game.boughtBy) {
    game.boughtBy = [];
  }

  if (
    game.owner.toString() != req.user._id.toString() &&
    game.boughtBy.map((x) => x.toString()).includes(req.user._id.toString()) ==
      false
  ) {
    await boughtByUser(req.params.id, req.user._id);
  }

  res.redirect(`/game/details/${req.params.id}`);
});

gameController.get("/details/:id", async (req, res) => {
  const game = await getGameById(req.params.id);
  game.isOwner = game.owner.toString() == req.user?._id.toString();

  if (game.boughtBy && game.boughtBy.length > 0) {
    game.hasBought = game.boughtBy
      .map((x) => x.toString())
      .includes(req.user._id.toString());
  }
  res.render("details", {
    title: "Details Page",
    user: req.user,
    game,
  });
});

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

module.exports = gameController;
