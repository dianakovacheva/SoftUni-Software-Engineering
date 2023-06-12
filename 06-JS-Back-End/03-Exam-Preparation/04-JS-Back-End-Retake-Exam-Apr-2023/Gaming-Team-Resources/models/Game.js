const {
  Schema,
  model,
  Types,
  SchemaType,
  default: mongoose,
} = require("mongoose");

const URL_PATTERN =
  /(http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-/]))?/i;

const gameSchema = new Schema({
  name: {
    type: String,
    required: true,
    minlength: [4, "Name must be at least 4 characters long"],
  },
  imageUrl: {
    type: String,
    required: true,
    validate: {
      validator: (value) => URL_PATTERN.test(value),
      message: "Invalid URL",
    },
  },
  price: {
    type: Number,
    required: true,
    min: [0, "Price must be a positive number"],
  },
  description: {
    type: String,
    required: true,
    minlength: [10, "Description must be at least 10 characters long"],
  },
  genre: {
    type: String,
    required: true,
    minlength: [2, "Genre must be at least 2 characters long"],
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
