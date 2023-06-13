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

async function deleteBook(bookId) {
  return await Book.findByIdAndDelete(bookId);
}

async function editBook(bookId, bookData) {
  const book = await Book.findById(bookId);

  book.title = bookData.title;
  book.author = bookData.author;
  book.imageUrl = bookData.imageUrl;
  book.bookReview = bookData.bookReview;
  book.genre = bookData.genre;
  book.stars = bookData.stars;

  return book.save();
}

module.exports = {
  getAllBooks,
  getBookById,
  createBookReview,
  bookWishedByUser,
  deleteBook,
  editBook,
};
