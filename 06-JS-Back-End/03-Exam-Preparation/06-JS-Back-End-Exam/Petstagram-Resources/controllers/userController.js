const { hasUser } = require("../middlewares/guards");

const userController = require("express").Router();

userController.get("/profile", hasUser(), (req, res) => {
  res.render("profile", {
    title: "Profile Page",
    user: req.user,
  });
});

module.exports = userController;
