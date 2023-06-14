const { getAllCrypto } = require("../services/cryptoService");

const catalogController = require("express").Router();

catalogController.get("/", async (req, res) => {
  const allCrypto = await getAllCrypto();

  res.render("cryptoCatalog", {
    title: "Catalog Page",
    user: req.user,
    allCrypto,
  });
});

module.exports = catalogController;
