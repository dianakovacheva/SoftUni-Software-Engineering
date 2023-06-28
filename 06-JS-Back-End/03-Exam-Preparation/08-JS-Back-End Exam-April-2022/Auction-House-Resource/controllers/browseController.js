const { getAllAuctions } = require("../services/auctionService");

const browseController = require("express").Router();

browseController.get("/", async (req, res) => {
  const auctions = await getAllAuctions();
  res.render("browse", {
    title: "Browse Auctions",
    user: req.user,
    auctions,
  });
});

module.exports = browseController;
