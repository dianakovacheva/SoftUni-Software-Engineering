const { Schema, model } = require("mongoose");

const EMAIL_PATTERN = /^[a-z]+@{1}[a-z]+\.{1}[a-z]{2,3}$/i;

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator: (value) => EMAIL_PATTERN.test(value),
      message: "Invalid email",
    },
  },
  hashedPassword: { type: String, required: true },
  firstName: {
    type: String,
    required: true,
    unique: true,
    minlength: [1, "The first name should be at least 1 character long"],
  },
  lastName: {
    type: String,
    required: true,
    unique: true,
    minlength: [1, "The last name should be at least 1 character long"],
  },
});

userSchema.index(
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
