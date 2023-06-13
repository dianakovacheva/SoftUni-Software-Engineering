const { hasUser } = require("../middlewares/guards");
const { getWishedBooks } = require("../services/bookService");

const profileController = require("express").Router();

profileController.get("/", hasUser(), async (req, res) => {
  const wishedBooks = await getWishedBooks(req.user._id);
  res.render("profile", {
    title: "Profile Page",
    user: Object.assign({ wishedBooks }, req.user),
  });
});

module.exports = profileController;
