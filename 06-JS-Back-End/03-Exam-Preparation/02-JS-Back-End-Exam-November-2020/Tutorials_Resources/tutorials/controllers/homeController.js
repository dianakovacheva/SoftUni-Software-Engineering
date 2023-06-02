const homeController = require("express").Router();

homeController.get("/", (req, res) => {
  if (req.user) {
    res.render("user-home", {
      title: "Home Page",
      user: req.user,
    });
  } else {
    res.render("guest-home", {
      title: "Home Page",
    });
  }
});

module.exports = homeController;
