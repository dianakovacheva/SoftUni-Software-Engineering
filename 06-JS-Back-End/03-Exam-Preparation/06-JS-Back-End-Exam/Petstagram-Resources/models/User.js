const { Schema, model } = require("mongoose");

// TODO add User properties and validation according to assigment
const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    minlength: [2, "The username should be at least 2 characters long"],
  },
  email: {
    type: String,
    required: true,
    unique: true,
    minlength: [10, "The email should be at least 10 characters long"],
  },
  hashedPassword: { type: String, required: true },
});

userSchema.index(
  { username: 1 },
  {
    collation: {
      locale: "en",
      strength: 2,
    },
  }
);

const User = model("User", userSchema);

module.exports = User;
