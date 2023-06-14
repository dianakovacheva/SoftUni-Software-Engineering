const { hasUser } = require("../middlewares/guards");
const { search } = require("../services/cryptoService");

const searchController = require("express").Router();

searchController.get("/", hasUser(), async (req, res) => {
  const { name, paymentMethod } = req.query;
  const crypto = await search(name, paymentMethod);

  res.render("search", {
    title: "Search Page",
    user: req.user,
    crypto,
    name,
    paymentMethod,
  });
});

module.exports = searchController;
