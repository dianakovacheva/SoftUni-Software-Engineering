const Photo = require("../models/Photo");

async function addPhotoPost(photoPost) {
  return await Photo.create(photoPost);
}

module.exports = {
  addPhotoPost,
};
