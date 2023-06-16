const { Schema, model, Types } = require("mongoose");

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
  skillsDescription: {
    type: String,
    required: true,
    maxlength: [
      40,
      "The description of skills should be a maximum of 40 characters long",
    ],
  },
  myAds: {
    type: [{ type: Types.ObjectId, ref: "Ad", default: [] }],
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
