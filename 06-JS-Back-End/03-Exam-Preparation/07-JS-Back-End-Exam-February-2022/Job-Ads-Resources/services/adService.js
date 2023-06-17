const Ad = require("../models/Ad");

async function getAllAds() {
  return await Ad.find({}).lean();
}

async function createAd(ad) {
  return await Ad.create(ad);
}

async function getAdById(adId) {
  return await Ad.findById(adId)
    .populate("author", "email")
    .populate("appliedUsers", ["email", "skillsDescription"])
    .lean();
}

async function updateAd(adId, adData) {
  return await Ad.findByIdAndUpdate(adId, adData);
}

async function deleteAd(adId) {
  return await Ad.findByIdAndDelete(adId);
}

async function applyForAd(adId, candidateId) {
  const ad = await Ad.findById(adId);

  if (!ad.appliedUsers.includes(candidateId)) {
    ad.appliedUsers.push(candidateId);
  }

  return ad.save();
}

async function getFirstNAds(n) {
  return Ad.find({}).limit(n).lean();
}

module.exports = {
  getAllAds,
  createAd,
  getAdById,
  updateAd,
  deleteAd,
  applyForAd,
  getFirstNAds,
};
