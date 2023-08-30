const authController = require("../controllers/authController");
const recipeController = require("../controllers/recipeController");

// const searchController = require("../controllers/searchController");

module.exports = (app) => {
  // app.use("/", homeController);
  app.use("/auth", authController);
  // app.use("/recipes", recipeController);
  // app.use("/search", searchController);
};
