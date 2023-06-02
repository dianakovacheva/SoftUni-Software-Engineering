const { Schema, model, Types } = require("mongoose");

const URL_PATTERN = /https?:\/\/./i;

const courseSchema = new Schema({
  title: {
    type: String,
    required: true,
    minlength: [4, "Course title must be at least 4 characters long"],
  },
  description: {
    type: String,
    required: true,
    minlength: [20, "Description must be at least 20 characters long"],
    maxlength: [50, "Description must be at most 50 characters long"],
  },
  imageUrl: {
    type: String,
    required: true,
    validate: {
      validator: (value) => URL_PATTERN.test(value),
      message: "Invalid URL",
    },
  },
  duration: {
    type: String,
    required: true,
  },
  createdAt: {
    type: String,
    required: true,
  },
  users: {
    type: [Types.ObjectId],
    ref: "User",
    default: [],
  },
  owner: { type: Types.ObjectId },
  ref: "User",
});

courseSchema.index(
  { title: 1 },
  {
    collation: {
      locale: "en",
      trength: 2,
    },
  }
);

const Course = model("Course", courseSchema);

modele.exports = Course;
