const {
  createCourse,
  getById,
  deleteById,
} = require("../services/courseService");
const { parseError } = require("../util/parser");

const courserController = require("express").Router();

courserController.get("/create", (req, res) => {
  res.render("create", {
    title: "Create Course",
  });
});

courserController.get("/:id", async (req, res) => {
  const course = await getById(req.params.id);
  course.isOwner = course.owner.toString() == req.user._id.toString();

  res.render("details", {
    title: course.title,
    course,
  });
});

courserController.get("/:id/delete", async (req, res) => {
  const course = await getById(req.params.id);

  if (course.owner.toString() != req.user._id.toString()) {
    return res.redirect("/auth/login");
  }

  await deleteById(req.params.id);
  res.redirect("/");
});

courserController.post("/create", async (req, res) => {
  const course = {
    title: req.body.title,
    description: req.body.description,
    imageUrl: req.body.imageUrl,
    duration: req.body.duration,
    owner: req.user._id,
  };

  try {
    await createCourse(course);
    res.redirect("/");
  } catch (error) {
    res.render("create", {
      title: "Create Course",
      errors: parseError(error),
      body: course,
    });
  }
});

courserController.get("/:id/edit", async (req, res) => {
  const course = await getById(req.params.id);

  res.render("edit", {
    title: "Edit Course",
    course,
  });
});

module.exports = courserController;
