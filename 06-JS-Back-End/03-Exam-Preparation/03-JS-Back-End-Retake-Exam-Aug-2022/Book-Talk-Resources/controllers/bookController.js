const { hasUser } = require("../middlewares/guards");
const { createBookReview } = require("../services/bookService");
const { parseError } = require("../util/parser");

const bookController = require("express").Router();

bookController.get("/createReview", hasUser(), (req, res) => {
  res.render("create", {
    title: "Create Page",
    user: req.user,
  });
});

bookController.post("/createReview", hasUser(), async (req, res) => {
  const book = {
    title: req.body.title,
    author: req.body.author,
    imageUrl: req.body.imageUrl,
    bookReview: req.body.bookReview,
    genre: req.body.genre,
    stars: req.body.stars,
    owner: req.user._id,
  };

  try {
    await createBookReview(book);
    res.redirect("/catalog");
  } catch (error) {
    res.render("create", {
      title: "Create Page",
      errors: parseError(error),
      body: book,
      user: req.user,
    });
  }
});

module.exports = bookController;
