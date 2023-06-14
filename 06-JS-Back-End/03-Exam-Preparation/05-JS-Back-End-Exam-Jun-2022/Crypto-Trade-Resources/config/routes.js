const authController = require("../controllers/authController");
const catalogController = require("../controllers/catalogController");
const cryptoController = require("../controllers/cryptoController");
const homeController = require("../controllers/homeController");

module.exports = (app) => {
  app.use("/", homeController);
  app.use("/auth", authController);
  app.use("/cryptoCatalog", catalogController);
  app.use("/crypto", cryptoController);
  app.use(function (req, res) {
    res.status(404).render("404");
  });
};
