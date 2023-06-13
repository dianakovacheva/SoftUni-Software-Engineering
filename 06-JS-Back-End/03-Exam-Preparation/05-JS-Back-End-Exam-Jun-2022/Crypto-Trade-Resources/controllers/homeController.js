const homeController = require("express").Router();

// TODO replace with real controller by assigment
homeController.get("/", (req, res) => {
  res.render("home", {
    title: "Home Page - Crypto Web",
    user: req.user,
  });
});

module.exports = homeController;
