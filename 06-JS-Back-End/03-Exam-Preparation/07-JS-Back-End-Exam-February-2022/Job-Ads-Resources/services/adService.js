const Ad = require("../models/Ad");
const { deleteFromMyAds } = require("./userService");

async function getAllAds() {
  return await Ad.find({}).populate("author", "email").lean();
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

async function deleteAd(adId, autorId) {
  await deleteFromMyAds(autorId, adId);
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

async function findMyAds(email) {
  let ads = await getAllAds();

  if (email) {
    ads = ads.filter((ad) => ad.author.email == Object.values(email));
  }

  return ads;
}

module.exports = {
  getAllAds,
  createAd,
  getAdById,
  updateAd,
  deleteAd,
  applyForAd,
  getFirstNAds,
  findMyAds,
};
