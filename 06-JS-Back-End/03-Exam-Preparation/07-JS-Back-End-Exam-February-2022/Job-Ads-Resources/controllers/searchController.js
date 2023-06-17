const { hasUser } = require("../middlewares/guards");
const { findMyAds } = require("../services/adService");

const searchController = require("express").Router();

searchController.get("/", hasUser(), async (req, res) => {
  const email = req.query?.email;
  const ads = await findMyAds(email);

  res.render("search", {
    title: "Search Page",
    user: req.user,
    email,
    ads,
  });
});

module.exports = searchController;
