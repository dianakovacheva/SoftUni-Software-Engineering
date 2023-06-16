const adController = require("../controllers/adController");
const allAdsController = require("../controllers/allAdsController");
const authController = require("../controllers/authController");
const homeController = require("../controllers/homeController");

module.exports = (app) => {
  app.use("/", homeController);
  app.use("/auth", authController);
  app.use("/allAds", allAdsController);
  app.use("/ad", adController);
};
