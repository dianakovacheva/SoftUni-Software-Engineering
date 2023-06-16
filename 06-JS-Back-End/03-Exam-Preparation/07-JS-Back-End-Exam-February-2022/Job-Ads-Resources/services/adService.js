const Ad = require("../models/Ad");

async function getAllAds() {
  return await Ad.find({}).lean();
}

async function createAd(adData, author) {
  return await Ad.create({
    headline: adData.headline,
    location: adData.location,
    companyName: adData.companyName,
    companyDescription: adData.companyDescription,
    author: author._id,
  });
}

async function getAdById(adId) {
  return await Ad.findById(adId).lean();
}

async function updateAd(adId, adData) {
  return await Ad.findByIdAndUpdate(adId, adData);
}

async function deleteAd(adId) {
  return await Ad.findByIdAndDelete(adId);
}

module.exports = {
  getAllAds,
  createAd,
  getAdById,
  updateAd,
  deleteAd,
};
