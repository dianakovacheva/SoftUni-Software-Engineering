const authController = require("../controllers/authController");
const catalogController = require("../controllers/catalogController");
const homeController = require("../controllers/homeController");
const photoPostController = require("../controllers/photoController");

module.exports = (app) => {
  app.use("/", homeController);
  app.use("/auth", authController);
  app.use("/catalog", catalogController);
  app.use("/photo", photoPostController);
};
