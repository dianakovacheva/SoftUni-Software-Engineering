const adController = require("../controllers/adController");
const allAdsController = require("../controllers/allAdsController");
const authController = require("../controllers/authController");
const homeController = require("../controllers/homeController");
const searchController = require("../controllers/searchController");

module.exports = (app) => {
  app.use("/", homeController);
  app.use("/auth", authController);
  app.use("/allAds", allAdsController);
  app.use("/ad", adController);
  app.use("/search", searchController);
  app.use(function (req, res) {
    res.status(404).render("404", {
      title: "404 Page not found",
      user: req.user,
    });
  });
};
