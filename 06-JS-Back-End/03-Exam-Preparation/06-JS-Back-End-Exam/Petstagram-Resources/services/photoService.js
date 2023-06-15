const Photo = require("../models/Photo");

async function addPhotoPost(photoPost) {
  return await Photo.create(photoPost);
}

async function getAllPhotoPost() {
  return await Photo.find({}).populate("owner").lean();
}

async function getPhotoPostById(photoPostId) {
  return await Photo.findById(photoPostId)
    .populate("owner")
    .populate("commentList.userId", "username")
    .lean();
}

async function editPhotoPost(photoPostId, photoPostData) {
  //   const existingPhotoPost = await Photo.findById(photoPostId);

  //   existingPhotoPost.name = photoPostData.name;
  //   existingPhotoPost.imageUrl = photoPostData.imageUrl;
  //   existingPhotoPost.age = photoPostData.age;
  //   existingPhotoPost.description = photoPostData.description;
  //   existingPhotoPost.location = photoPostData.location;

  //   return existingPhotoPost.save();

  return Photo.findByIdAndUpdate(photoPostId, photoPostData);
}

async function deletePhotoPost(photoPostId) {
  return await Photo.findByIdAndDelete(photoPostId);
}

async function addComment(photoPostId, commentData) {
  const photoPost = await Photo.findById(photoPostId);

  photoPost.commentList.push(commentData);

  return photoPost.save();
}

async function uploadedPhotosByOwnerId(userId) {
  const uploadedPhotos = await Photo.find({ owner: userId }).lean();
  return uploadedPhotos;
}

module.exports = {
  addPhotoPost,
  getAllPhotoPost,
  getPhotoPostById,
  editPhotoPost,
  deletePhotoPost,
  addComment,
  uploadedPhotosByOwnerId,
};
