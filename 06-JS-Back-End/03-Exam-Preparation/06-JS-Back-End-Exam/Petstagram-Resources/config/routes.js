const authController = require("../controllers/authController");
const catalogController = require("../controllers/catalogController");
const homeController = require("../controllers/homeController");
const photoPostController = require("../controllers/photoController");
const userController = require("../controllers/userController");

module.exports = (app) => {
  app.use("/", homeController);
  app.use("/auth", authController);
  app.use("/catalog", catalogController);
  app.use("/photo", photoPostController);
  app.use("/profile", userController);
  app.use(function (req, res) {
    res.status(404).render("404", {
      user: req.user,
    });
  });
};
