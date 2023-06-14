const { hasUser } = require("../middlewares/guards");
const {
  getCryptoById,
  createCryptoOffer,
} = require("../services/cryptoService");
const { parseError } = require("../util/parser");

const cryptoController = require("express").Router();

cryptoController.get("/details/:id", async (req, res) => {
  const crypto = await getCryptoById(req.params.id);
});

cryptoController.get("/createOffer", hasUser(), (req, res) => {
  res.render("create", {
    title: "Create Page",
    user: req.user,
  });
});

cryptoController.post("/createOffer", hasUser(), async (req, res) => {
  const crypto = {
    name: req.body.name,
    imageUrl: req.body.imageUrl,
    price: req.body.price,
    cryptoDescription: req.body.cryptoDescription,
    paymentMethod: req.body.paymentMethod,
    owner: req.body.owner,
  };

  try {
    await createCryptoOffer(crypto);
    res.redirect("/cryptoCatalog");
  } catch (error) {
    res.render("create", {
      title: "Create Page",
      errors: parseError(error),
      user: req.user,
      body: crypto,
    });
  }
});

module.exports = cryptoController;
