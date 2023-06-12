const { Schema, model, Types } = require("mongoose");

const bookSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
    required: true,
  },
  bookReview: {
    type: String,
    required: true,
  },
  genre: {
    type: String,
    required: true,
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
