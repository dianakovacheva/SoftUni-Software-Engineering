const { hasUser } = require("../middlewares/guards");
const { getAllAds } = require("../services/adService");

const adsController = require("express").Router();

adsController.get("/", async (req, res) => {
  const ads = await getAllAds();

  res.render("allAds", {
    title: "All Ads Page",
    user: req.user,
    ads,
  });
});

module.exports = adsController;
