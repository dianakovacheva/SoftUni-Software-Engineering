const { Schema, model, Types } = require("mongoose");

const URL_PATTERN =
  /(http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-/]))?/i;

const bookSchema = new Schema({
  title: {
    type: String,
    required: true,
    minlength: [2, "The Title should be at least 2 characters"],
  },
  author: {
    type: String,
    required: true,
    minlength: [5, "The Author should be at least 5 characters"],
  },
  imageUrl: {
    type: String,
    required: true,
    validate: {
      validator: (value) => URL_PATTERN.test(value),
      message: "Invalid URL",
    },
  },
  bookReview: {
    type: String,
    required: true,
    minlength: [10, "The Review should be a minimum of 10 characters long."],
  },
  genre: {
    type: String,
    required: true,
    minlength: [3, "The Genre should be at least 3 characters"],
  },
  stars: {
    type: Number,
    required: true,
    min: 1,
    max: 5,
  },
  wishingList: {
    type: [Types.ObjectId],
    ref: "User",
    default: [],
  },
  owner: {
    type: Types.ObjectId,
    ref: "User",
  },
});

bookSchema.index(
  { title: 1 },
  {
    collation: {
      locale: "en",
      trength: 2,
    },
  }
);

const Book = model("Book", bookSchema);

module.exports = Book;

// Note:  When a user adds a book to their Wishlist, their id is added to that collection (WishingList)
