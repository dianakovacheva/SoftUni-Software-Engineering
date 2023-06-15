const { Schema, model, Types } = require("mongoose");

const URL_PATTERN =
  /(http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-/]))?/i;

const photoSchema = new Schema({
  name: {
    type: String,
    required: true,
    minlength: [2, "The name should be at least 2 characters"],
  },
  imageUrl: {
    type: String,
    required: true,
    validate: {
      validator: (value) => URL_PATTERN.test(value),
      message: "Invalid URL",
    },
  },
  age: {
    type: Number,
    required: true,
    minlenght: [1, "The age should be at least 1 characters"],
    maxlength: [100, "The age should be no longer than 100 characters"],
  },
  description: {
    type: String,
    required: true,
    minlenght: [5, "The description should be at least 5 characters"],
    maxlenght: [50, "The description should be no longer than 50 characters"],
  },
  location: {
    type: String,
    required: true,
    minlenght: [5, "The description should be at least 5 characters"],
    maxlenght: [50, "The description should be no longer than 50 characters"],
  },
  commentList: [
    {
      userID: {
        type: Types.ObjectId,
        ref: "User",
        required: true,
      },
      comment: {
        type: String,
        required: true,
      },
    },
  ],
  owner: {
    type: Types.ObjectId,
    ref: "User",
  },
});

const Photo = model("Photo", photoSchema);

module.exports = Photo;

// • commentList – an array of objects containing the user's ID and the comment content: [ { userID: '1234', comment: 'Nice photo!'} ]
// • owner – object ID (a reference to the User model)
// Note: When a user comments a photo, their ID is added to that collection (commentList)
