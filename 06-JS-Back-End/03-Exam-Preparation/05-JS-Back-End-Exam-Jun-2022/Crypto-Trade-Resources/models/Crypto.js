const { Schema, model, Types } = require("mongoose");

const URL_PATTERN =
  /(http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-/]))?/i;

const cryptoSchema = new Schema({
  name: {
    type: String,
    required: true,
    minlength: [2, "The Name should be at least 2 characters long"],
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
    min: [1, "The Price should be a positive number"],
  },
  cryptoDescription: {
    type: String,
    required: true,
    minlength: [
      10,
      "The Description should be a minimum of 10 characters long",
    ],
  },
  paymentMethod: {
    type: String,
    required: true,
    emun: ["crypto-wallet", "credit-card", "debit-card", "paypal"],
  },
  buyACrypto: {
    type: [Types.ObjectId],
    ref: "User",
    default: [],
  },
  owner: {
    type: Types.ObjectId,
    ref: "User",
  },
});

const Crypto = model("Crypto", cryptoSchema);

module.exports = Crypto;
