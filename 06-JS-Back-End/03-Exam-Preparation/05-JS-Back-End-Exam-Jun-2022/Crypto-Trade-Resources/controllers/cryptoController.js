const { hasUser } = require("../middlewares/guards");
const {
  getCryptoById,
  createCryptoOffer,
  buyACrypto,
  deleteACrypto,
  editACrypto,
} = require("../services/cryptoService");
const { parseError } = require("../util/parser");

const cryptoController = require("express").Router();

cryptoController.get("/details/:id/edit", hasUser(), async (req, res) => {
  const crypto = await getCryptoById(req.params.id);

  res.render("edit", {
    title: "Edit Page",
    user: req.user,
    crypto,
  });
});

cryptoController.post("/details/:id/edit", hasUser(), async (req, res) => {
  const crypto = await getCryptoById(req.params.id);

  if (crypto.owner.toString() != req.user._id.toString()) {
    return res.redirect("auth/login");
  }

  try {
    await editACrypto(crypto._id, req.body);
    res.redirect(`/crypto/details/${crypto._id}`);
  } catch (error) {
    res.render("edit", {
      title: "Edit Page",
      user: req.user,
      errors: parseError(error),
      crypto,
    });
  }
});

cryptoController.get("/details/:id/delete", hasUser(), async (req, res) => {
  const crypto = await getCryptoById(req.params.id);

  if (crypto.owner.toString() != req.user._id.toString()) {
    return res.redirect("/auth/login");
  }

  await deleteACrypto(crypto._id);
  res.redirect("/cryptoCatalog");
});

cryptoController.get("/details/:id/buy", hasUser(), async (req, res) => {
  const crypto = await getCryptoById(req.params.id);

  if (!crypto.buyACrypto) {
    crypto.buyACrypto = [];
  }

  if (
    crypto.owner.toString() != req.user._id.toString() &&
    crypto.buyACrypto
      .map((x) => x.toString())
      .includes(req.user._id.toString()) == false
  ) {
    await buyACrypto(crypto._id, req.user._id);
  }
  res.redirect(`/crypto/details/${crypto._id}`);
});

cryptoController.get("/details/:id", async (req, res) => {
  const crypto = await getCryptoById(req.params.id);

  crypto.isOwner = crypto.owner.toString() == req.user?._id.toString();

  if (crypto.buyACrypto && crypto.buyACrypto.length > 0) {
    crypto.hasBought = crypto.buyACrypto
      .map((userId) => userId.toString())
      .includes(req.user?._id.toString());
  }

  res.render("details", {
    title: "Details Page",
    user: req.user,
    crypto,
  });
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
    owner: req.user._id,
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
