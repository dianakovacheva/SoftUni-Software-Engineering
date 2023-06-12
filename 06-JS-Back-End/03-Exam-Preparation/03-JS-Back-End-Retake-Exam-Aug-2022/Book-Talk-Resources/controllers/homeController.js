const homeController = require("express").Router();

homeController.get("/", (req, res) => {
  res.render("home", {
    title: "Book Store",
    user: req.user,
  });
});

module.exports = homeController;
