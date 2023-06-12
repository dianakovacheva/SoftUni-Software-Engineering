const searchController = require("express").Router();

searchController.get("/", (req, res) => {
  res.render("search", {
    title: "Search Page",
    user: req.user,
  });
});

module.exports = {
  searchController,
};
