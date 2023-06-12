const authController = require("../controllers/authController");
const catalogController = require("../controllers/catalogController");
const gameController = require("../controllers/gameController");
const homeController = require("../controllers/homeController");
const { searchController } = require("../controllers/searchController");
const { hasUser } = require("../middlewares/guards");

module.exports = (app) => {
  app.use("/", homeController);
  app.use("/catalog", catalogController);
  app.use("/auth", authController);
  app.use("/game", gameController);
  app.use("/search", searchController);
  app.use(function (req, res) {
    res.status(404).render("404");
  });
};
