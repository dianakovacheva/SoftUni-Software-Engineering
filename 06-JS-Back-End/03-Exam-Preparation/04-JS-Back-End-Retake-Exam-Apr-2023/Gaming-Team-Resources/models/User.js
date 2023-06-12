const { Schema, model } = require("mongoose");

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    minlength: [5, "Username must be at least 5 characters long"],
  },
  email: {
    type: String,
    required: true,
    minlength: [10, "The email must be at least 10 characters long"],
  },
  hashedPassword: {
    type: String,
    required: true,
    minlength: [4, "The password must be at least 4 characters long"],
  },
});

userSchema.index(
  { username: 1 },
  { email: 1 },
  {
    collation: {
      locale: "en",
      strength: 2,
    },
  }
);

const User = model("User", userSchema);

module.exports = User;
