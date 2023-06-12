const { hasUser } = require("../middlewares/guards");
const {
  createGameOffer,
  getGameById,
  boughtByUser,
  deleteGame,
  editGame,
} = require("../services/gameService");

const { parseError } = require("../util/parser");

const gameController = require("express").Router();

gameController.get("/details/:id/buy", hasUser(), async (req, res) => {
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
      .includes(req.user?._id.toString());
  }
  res.render("details", {
    title: "Details Page",
    user: req.user,
    game,
  });
});

gameController.get("/details/:id/delete", hasUser(), async (req, res) => {
  const game = await getGameById(req.params.id);
  try {
    if (game.owner.toString() != req.user._id.toString()) {
      return res.redirect("/auth/login");
    }
    await deleteGame(game._id);
    res.redirect("/catalog");
  } catch (error) {
    res.render("details", {
      title: "Details Page",
      user: req.user,
      game,
      errors: parseError(error),
    });
  }
});

gameController.get("/details/:id/edit", hasUser(), async (req, res) => {
  const game = await getGameById(req.params.id);

  res.render("edit", {
    title: "Edit Game Code Offer",
    user: req.user,
    game,
  });
});

gameController.post("/details/:id/edit", hasUser(), async (req, res) => {
  const game = await getGameById(req.params.id);

  try {
    if (game.owner.toString() != req.user._id.toString()) {
      return res.redirect("/auth/login");
    }

    await editGame(req.params.id, req.body);

    res.redirect(`/game/details/${req.params.id}`);
  } catch (error) {
    res.render("edit", {
      title: "Edit Game Code Offer",
      user: req.user,
      game: req.body,
      errors: parseError(error),
    });
  }
});

gameController.get("/create", hasUser(), (req, res) => {
  res.render("create", {
    title: "Create Page - Gaming Team",
    user: req.user,
  });
});

gameController.post("/create", hasUser(), async (req, res) => {
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
      title: "Create Game Code Offer",
      errors: parseError(error),
      body: game,
      user: req.user,
    });
  }
});

module.exports = gameController;
