const { hasUser } = require("../middlewares/guards");

const auctionController = require("express").Router();

auctionController.get("/publish", hasUser(), async (req, res) => {
  res.render("create", {
    title: "Publish Auction",
    user: req.user,
  });
});

module.exports = auctionController;
