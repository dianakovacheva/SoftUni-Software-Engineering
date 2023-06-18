const auctionController = require("express").Router();

auctionController.get("/browse", (req, res) => {
  res.render("browse", {
    title: "Browse Page",
  });
});

module.exports = auctionController;
