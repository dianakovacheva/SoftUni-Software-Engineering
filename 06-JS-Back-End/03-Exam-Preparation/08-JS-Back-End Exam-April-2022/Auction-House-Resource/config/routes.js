const auctionController = require("../controllers/auctionController");
const authController = require("../controllers/authController");
const browseController = require("../controllers/browseController");
const homeController = require("../controllers/homeController");

module.exports = (app) => {
  app.use("/", homeController);
  app.use("/auth", authController);
  app.use("/browse", browseController);
  app.use("/auction", auctionController);
};
