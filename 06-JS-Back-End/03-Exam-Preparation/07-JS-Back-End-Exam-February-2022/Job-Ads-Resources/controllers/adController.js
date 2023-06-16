const { hasUser } = require("../middlewares/guards");
const { createAd, getAdById } = require("../services/adService");
const { parseError } = require("../util/parser");

const adController = require("express").Router();

adController.get("/create", hasUser(), (req, res) => {
  res.render("create", {
    title: "Create Ad Page",
    user: req.user,
  });
});

adController.post("/create", hasUser(), async (req, res) => {
  try {
    await createAd(req.body, req.user);

    res.redirect("/allAds");
  } catch (error) {
    res.render("create", {
      errors: parseError(error),
      title: "Create Ad Page",
      user: req.user,
      ad: req.body,
    });
  }
});

adController.get("/details/:id", async (req, res) => {
  const ad = await getAdById(req.params.id);

  ad.isAuthor = ad.author.toString() == req.user?._id.toString();

  ad.hasApplied;

  res.render("details", {
    title: "Details Page",
    user: req.user,
    ad,
  });
});

module.exports = adController;
