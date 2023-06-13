const authController = require("../controllers/authController");
const bookController = require("../controllers/bookController");
const catalogController = require("../controllers/catalogController");
const homeController = require("../controllers/homeController");
const profileController = require("../controllers/profileController");

module.exports = (app) => {
  app.use("/", homeController);
  app.use("/catalog", catalogController);
  app.use("/auth", authController);
  app.use("/book", bookController);
  app.use("/profile", profileController);
  app.use("*", (req, res) => {
    res.render("404", {
      title: "404 Page",
      user: req.user,
    });
  });
};
