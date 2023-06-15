const { hasUser } = require("../middlewares/guards");
const {
  addPhotoPost,
  getPhotoPostById,
  editPhotoPost,
  deletePhotoPost,
  addComment,
} = require("../services/photoService");
const { parseError } = require("../util/parser");

const photoPostController = require("express").Router();

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

photoPostController.get("/details/:id", async (req, res) => {
  const photoPost = await getPhotoPostById(req.params.id);

  photoPost.isOwner =
    photoPost.owner._id.toString() == req.user?._id.toString();

  photoPost.canAddComment =
    photoPost.owner._id.toString() != req.user?._id.toString();

  res.render("details", {
    title: "Details Page",
    user: req.user,
    photoPost,
  });
});

photoPostController.get("/details/:id/edit", hasUser(), async (req, res) => {
  const photoPost = await getPhotoPostById(req.params.id);

  res.render("edit", {
    title: "Edit Page",
    user: req.user,
    photoPost,
  });
});

photoPostController.post("/details/:id/edit", hasUser(), async (req, res) => {
  const photoPost = await getPhotoPostById(req.params.id);

  try {
    await editPhotoPost(photoPost._id, req.body);
    res.redirect(`/photo/details/${photoPost._id}`);
  } catch (error) {
    res.render("edit", {
      title: "Edit Page",
      errors: parseError(error),
      user: req.user,
      photoPost,
    });
  }
});

photoPostController.get("/details/:id/delete", hasUser(), async (req, res) => {
  const photoPost = await getPhotoPostById(req.params.id);

  try {
    await deletePhotoPost(photoPost);
    res.redirect("/catalog");
  } catch (error) {
    res.render("details", {
      title: "Details Page",
      user: req.user,
      errors: parseError(error),
      photoPost,
    });
  }
});

photoPostController.post("/:id/comments", hasUser(), async (req, res) => {
  const photoPost = await getPhotoPostById(req.params.id);
  const { comment } = req.body;
  const userId = req.user._id;

  await addComment(photoPost._id, { userId, comment });
  res.redirect(`/photo/details/${photoPost._id}`);
});

module.exports = photoPostController;
