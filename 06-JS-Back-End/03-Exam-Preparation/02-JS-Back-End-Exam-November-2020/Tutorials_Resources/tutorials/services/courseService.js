const Course = require("../models/Course");

async function getAllByDate(search) {
  const query = {};

  if (search) {
    query.title = new RegExp(search, "i");
  }
  return Course.find(query).sort({ createdAt: 1 }).lean();
}

async function getRecent() {
  return Course.find({}).sort({ userCount: -1 }).limit(3).lean();
}

async function createCourse(course) {
  return Course.create(course);
}

async function getById(id) {
  return Course.findById(id).lean();
}

async function deleteById(id) {
  return Course.findByIdAndDelete(id);
}

async function updateById(id, data) {
  const existingCourse = await Course.findById(id);

  existingCourse.title = data.title;
  existingCourse.description = data.description;
  existingCourse.imageUrl = data.imageUrl;
  existingCourse.duration = data.duration;

  return existingCourse.save();
}

async function enrollUser(courseId, userId) {
  const existingCourse = await Course.findById(courseId);
  existingCourse.users.push(userId);

  existingCourse.userCount++;

  return existingCourse.save();
}

module.exports = {
  getAllByDate,
  createCourse,
  getRecent,
  getById,
  deleteById,
  updateById,
  enrollUser,
};
