const photoController = require("express").Router();

photoController.get("/details", (req, res) => {
  res.render("details", {
    title: "Details Page",
    user: req.user,
  });
});

module.exports = photoController;
