const Photo = require("../models/Photo");

async function addPhotoPost(photoPost) {
  return await Photo.create(photoPost);
}

async function getAllPhotoPost() {
  return await Photo.find({}).populate("owner").lean();
}

module.exports = {
  addPhotoPost,
  getAllPhotoPost,
};
