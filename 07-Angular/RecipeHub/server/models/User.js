const { Schema, model, Types } = require("mongoose");

const EMAIL_PATTERN = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;

const userSchema = new Schema({
  firstName: {
    type: String,
    required: true,
    minlength: [2, "The first name must be at least 2 characters long."],
    validate: {
      validator: function (v) {
        return /[a-zA-Z]+/g.test(v);
      },
      message: (props) => `${props.value} must contains only latin letters!`,
    },
  },
  lastName: {
    type: String,
    required: true,
    minlength: [2, "The last name must be at least 2 characters long."],
    validate: {
      validator: function (v) {
        return /[a-zA-Z]+/g.test(v);
      },
      message: (props) => `${props.value} must contains only latin letters!`,
    },
  },
  email: {
    type: String,
    required: true,
    unique: true,
    minlength: [10, "The email must be at least 10 characters long."],
    validate: {
      validator: (value) => EMAIL_PATTERN.test(value),
      message: "Invalid email address.",
    },
  },
  hashedPassword: { type: String, required: true },
  // userOwnRecipesList: [
  //   {
  //     type: [Types.ObjectId],
  //     ref: "Recipe",
  //   },
  // ],
});

const User = model("User", userSchema);

module.exports = User;
