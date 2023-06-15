const Photo = require("../models/Photo");

async function addPhotoPost(photoPost) {
  return await Photo.create(photoPost);
}

async function getAllPhotoPost() {
  return await Photo.find({}).populate("owner").lean();
}

async function getPhotoPostById(photoPostId) {
  return await Photo.findById(photoPostId).populate("owner").lean();
}

async function editPhotoPost(photoPostId, photoPostData) {
  const existingPhotoPost = await Photo.findById(photoPostId);

  existingPhotoPost.name = photoPostData.name;
  existingPhotoPost.imageUrl = photoPostData.imageUrl;
  existingPhotoPost.age = photoPostData.age;
  existingPhotoPost.description = photoPostData.description;
  existingPhotoPost.location = photoPostData.location;

  return existingPhotoPost.save();
}

module.exports = {
  addPhotoPost,
  getAllPhotoPost,
  getPhotoPostById,
  editPhotoPost,
};
