const authController = require("../controllers/authController");
const catalogController = require("../controllers/catalogController");
const cryptoController = require("../controllers/cryptoController");
const homeController = require("../controllers/homeController");
const searchController = require("../controllers/searchController");

module.exports = (app) => {
  app.use("/", homeController);
  app.use("/auth", authController);
  app.use("/cryptoCatalog", catalogController);
  app.use("/crypto", cryptoController);
  app.use("/search", searchController);
  app.use(function (req, res) {
    res.status(404).render("404");
  });
};
