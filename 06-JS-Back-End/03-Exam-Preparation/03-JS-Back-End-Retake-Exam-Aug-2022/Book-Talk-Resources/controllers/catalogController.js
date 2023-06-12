const catalogController = require("express").Router();

catalogController.get("/", (req, res) => {
  res.render("catalog", {
    title: "Catalog Page",
    user: req.user,
  });
});

module.exports = { catalogController };
