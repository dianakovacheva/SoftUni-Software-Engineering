const authController = require("../controllers/authController");
const catalogController = require("../controllers/catalogController");
const gameController = require("../controllers/gameController");
const homeController = require("../controllers/homeController");

module.exports = (app) => {
  app.use("/", homeController);
  app.use("/catalog", catalogController);
  app.use("/auth", authController);
  app.use("/create", gameController);
};
