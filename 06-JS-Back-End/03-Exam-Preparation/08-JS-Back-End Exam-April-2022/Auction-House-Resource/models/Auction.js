const { Schema, model, Types } = require("mongoose");

const auctionSchema = new Schema({
  title: {
    type: String,
    required: true,
    minlength: [4, "The title should be a minimum of 4 characters long"],
  },
  description: {
    type: String,
    required: true,
    maxlength: [
      200,
      "The description should be a maximum of 200 characters long",
    ],
  },
  category: {
    type: String,
    required: true,
    enum: ["Vehicles", "Real Estate", "Electronics", "Furniture", "Other"],
    message:
      "The category should be one of the following: Vehicles, Real Estate, Electronics, Furniture, Other",
  },
  imageUrl: {
    type: String,
  },
  price: {
    type: Number,
    required: true,
    min: [0, "The price cannot be negative"],
  },
  author: {
    type: Types.ObjectId,
    required: true,
    ref: "User",
  },
  bidder: {
    type: [Types.ObjectId],
    ref: "User",
  },
});

auctionSchema.index(
  { title: 1 },
  {
    collation: {
      locale: "en",
      strength: 2,
    },
  }
);

const Auction = model("Auction", auctionSchema);

module.exports = Auction;
