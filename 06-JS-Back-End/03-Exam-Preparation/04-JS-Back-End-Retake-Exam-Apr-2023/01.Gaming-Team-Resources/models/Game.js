const { Schema, model, Types } = require("mongoose");

const gameSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  genre: {
    type: String,
    required: true,
  },
  platform: {
    type: String,
    required: true,
    enum: ["PC", "Nintendo", "PS4", "PS5", "XBOX"],
  },
  boughtBy: {
    type: [Types.ObjectId],
    ref: "User",
    default: [],
  },
  owner: { type: Types.ObjectId, ref: "User" },
});

gameSchema.index(
  { name: 1 },
  {
    collation: {
      locale: "en",
      strength: 2,
    },
  }
);

const Game = model("Game", gameSchema);

module.exports = Game;
