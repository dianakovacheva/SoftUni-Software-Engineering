const { hasUser } = require("../middlewares/guards");
const {
  createBookReview,
  getBookById,
  bookWishedByUser,
} = require("../services/bookService");
const { parseError } = require("../util/parser");

const bookController = require("express").Router();

bookController.get("/details/:id/wishList", hasUser(), async (req, res) => {
  const book = await getBookById(req.params.id);

  if (!book.wishingList) {
    book.wishingList = [];
  }

  if (book) {
    if (
      book.owner.toString() != req.user._id.toString() &&
      book.wishingList
        .map((x) => x.toString())
        .includes(req.user._id.toString()) == false
    ) {
      await bookWishedByUser(req.params.id, req.user._id);
    }
    res.redirect(`/book/details/${req.params.id}`);
  }
});

bookController.get("/details/:id", async (req, res) => {
  const book = await getBookById(req.params.id);

  book.isAuthor = book.owner.toString() == req.user?._id.toString();

  if (book.wishingList && book.wishingList.length > 0) {
    book.hasWished = book.wishingList
      .map((x) => x.toString())
      .includes(req.user?._id.toString());
  }

  res.render("details", {
    title: "Details Page",
    user: req.user,
    book,
  });
});

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
