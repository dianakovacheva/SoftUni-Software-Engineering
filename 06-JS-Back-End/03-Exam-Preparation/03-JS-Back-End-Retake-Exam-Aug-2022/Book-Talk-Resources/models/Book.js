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

// Note:  When a user adds a book to their Wishlist, their id is added to that collection (WishingList)
