const { getFirstNAds } = require("../services/adService");

const homeController = require("express").Router();

homeController.get("/", async (req, res) => {
  const adsForShowcase = await getFirstNAds(3);

  res.render("home", {
    title: "Home Page",
    user: req.user,
    adsForShowcase,
  });
});

module.exports = homeController;
