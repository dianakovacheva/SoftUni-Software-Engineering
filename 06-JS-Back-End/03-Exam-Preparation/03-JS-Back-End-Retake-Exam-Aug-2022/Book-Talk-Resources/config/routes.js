const authController = require("../controllers/authController");
const { catalogController } = require("../controllers/catalogController");
const homeController = require("../controllers/homeController");

module.exports = (app) => {
  app.use("/", homeController);
  app.use("/catalog", catalogController);
  app.use("/auth", authController);
  app.use("*", (req, res) => {
    res.render("404", {
      title: "404 Page",
      user: req.user,
    });
  });
};
