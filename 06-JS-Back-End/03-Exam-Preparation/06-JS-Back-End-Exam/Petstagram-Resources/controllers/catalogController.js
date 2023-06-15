const { getAllPhotoPost } = require("../services/photoService");

const catalogController = require("express").Router();

catalogController.get("/", async (req, res) => {
  const photoPosts = await getAllPhotoPost();

  res.render("catalog", {
    title: "Catalog Page",
    user: req.user,
    photoPosts,
  });
});

module.exports = catalogController;
