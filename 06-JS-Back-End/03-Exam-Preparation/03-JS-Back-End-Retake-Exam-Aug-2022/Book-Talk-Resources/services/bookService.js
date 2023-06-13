const Book = require("../models/Book");

async function getAllBooks() {
  return Book.find({}).lean();
}

async function getBookById(bookId) {
  return Book.findById(bookId).lean();
}

async function createBookReview(book) {
  return Book.create(book);
}

async function bookWishedByUser(bookId, userId) {
  const book = await Book.findById(bookId);
  book.wishingList.push(userId);

  return book.save();
}

module.exports = {
  getAllBooks,
  getBookById,
  createBookReview,
  bookWishedByUser,
};
