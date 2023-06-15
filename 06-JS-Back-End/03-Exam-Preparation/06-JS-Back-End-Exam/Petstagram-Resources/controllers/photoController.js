const { hasUser } = require("../middlewares/guards");
const { addPhotoPost } = require("../services/photoService");
const { parseError } = require("../util/parser");

const photoPostController = require("express").Router();

photoPostController.get("/details/:id", (req, res) => {
  res.render("details", {
    title: "Details Page",
    user: req.user,
  });
});

photoPostController.get("/addPhoto", hasUser(), (req, res) => {
  res.render("create", {
    title: "Create Page",
    user: req.user,
  });
});

photoPostController.post("/addPhoto", hasUser(), async (req, res) => {
  const photoPost = {
    name: req.body.name,
    imageUrl: req.body.imageUrl,
    age: Number(req.body.age),
    description: req.body.description,
    location: req.body.location,
    owner: req.user._id,
  };

  try {
    await addPhotoPost(photoPost);
    res.redirect("/catalog");
  } catch (error) {
    res.render("create", {
      title: "Create Page",
      user: req.user,
      errors: parseError(error),
      photoPost: req.body,
    });
  }
});

module.exports = photoPostController;
