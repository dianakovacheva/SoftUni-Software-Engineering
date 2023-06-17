const { hasUser } = require("../middlewares/guards");
const {
  createAd,
  getAdById,
  updateAd,
  deleteAd,
  applyForAd,
} = require("../services/adService");
const { addToMyAds } = require("../services/userService");
const { parseError } = require("../util/parser");

const adController = require("express").Router();

adController.get("/create", hasUser(), (req, res) => {
  res.render("create", {
    title: "Create Ad Page",
    user: req.user,
  });
});

adController.post("/create", hasUser(), async (req, res) => {
  const ad = {
    headline: req.body.headline,
    location: req.body.location,
    companyName: req.body.companyName,
    companyDescription: req.body.companyDescription,
    author: req.user._id,
  };

  try {
    const createdAd = await createAd(ad);
    await addToMyAds(createdAd, req.user._id);

    res.redirect("/allAds");
  } catch (error) {
    res.render("create", {
      errors: parseError(error),
      title: "Create Ad Page",
      user: req.user,
      ad,
    });
  }
});

adController.get("/details/:id", async (req, res) => {
  const ad = await getAdById(req.params.id);
  ad.isAuthor = ad.author._id.toString() == req.user?._id.toString();

  ad.hasApplied = ad.appliedUsers.find(
    (candidate) => candidate._id.toString() == req.user?._id.toString()
  );

  res.render("details", {
    title: "Details Page",
    user: req.user,
    ad,
  });
});

adController.get("/details/:id/edit", hasUser(), async (req, res) => {
  const ad = await getAdById(req.params.id);

  res.render("edit", {
    title: "Edit Page",
    user: req.user,
    ad,
  });
});

adController.post("/details/:id/edit", hasUser(), async (req, res) => {
  const ad = await getAdById(req.params.id);

  try {
    await updateAd(req.params.id, req.body);
    res.redirect(`/ad/details/${ad._id}`);
  } catch (error) {
    res.render("edit", {
      title: "Edit Page",
      user: req.user,
      errors: parseError(error),
      ad,
    });
  }
});

adController.get("/details/:id/delete", hasUser(), async (req, res) => {
  try {
    await deleteAd(req.params.id, req.user._id);
    res.redirect("/allAds");
  } catch (error) {
    res.render(`/ad/details/${req.params.id}`, {
      title: "Details Page",
      user: req.user,
      errors: parseError(error),
    });
  }
});

adController.get("/details/:id/apply", hasUser(), async (req, res) => {
  try {
    await applyForAd(req.params.id, req.user._id);
    res.redirect(`/ad/details/${req.params.id}`);
  } catch (error) {
    res.render(`/ad/details/${req.params.id}`, {
      title: "Details Page",
      user: req.user,
      errors: parseError(error),
    });
  }
});

module.exports = adController;
