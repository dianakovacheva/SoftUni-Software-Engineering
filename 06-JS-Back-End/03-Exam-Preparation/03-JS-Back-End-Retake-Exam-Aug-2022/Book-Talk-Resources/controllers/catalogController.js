const catalogController = require("express").Router();

catalogController.get("/", (req, res) => {
  res.render("catalog", {
    title: "Catalog Page",
  });
});

module.exports = { catalogController };
