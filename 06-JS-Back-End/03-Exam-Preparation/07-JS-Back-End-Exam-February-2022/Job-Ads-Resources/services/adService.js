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

module.exports = {
  getAllAds,
  createAd,
  getAdById,
};
