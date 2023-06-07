const authController = require("../controllers/authController");
const catalogController = require("../controllers/catalogController");
const gameController = require("../controllers/gameController");
const homeController = require("../controllers/homeController");
const { hasUser } = require("../middlewares/guards");

module.exports = (app) => {
  app.use("/", homeController);
  app.use("/catalog", hasUser(), catalogController);
  app.use("/auth", authController);
  app.use("/create", gameController);
};
