const Book = require("../models/Book");

async function getAllBooks() {
  return Book.find({}).lean();
}

async function createBookReview(book) {
  return Book.create(book);
}

module.exports = {
  getAllBooks,
  createBookReview,
};
