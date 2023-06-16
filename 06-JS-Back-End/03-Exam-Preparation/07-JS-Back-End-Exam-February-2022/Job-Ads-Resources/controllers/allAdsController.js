const { getAllAds } = require("../services/adService");

const allAdsController = require("express").Router();

allAdsController.get("/", async (req, res) => {
  const ads = await getAllAds();

  res.render("allAds", {
    title: "All Ads Page",
    user: req.user,
    ads,
  });
});

module.exports = allAdsController;
