const { hasUser } = require("../middlewares/guards");
const { uploadedPhotosByOwnerId } = require("../services/photoService");

const userController = require("express").Router();

userController.get("/", hasUser(), async (req, res) => {
  const uploadedPhotos = await uploadedPhotosByOwnerId(req.user._id);
  const uploadedPhotosCount = uploadedPhotos.length;

  res.render("profile", {
    title: "Profile Page",
    user: req.user,
    uploadedPhotos,
    uploadedPhotosCount,
  });
});

module.exports = userController;
