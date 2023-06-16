const Ad = require("../models/Ad");

async function getAllAds() {
  return await Ad.find({}).lean();
}

module.exports = {
  getAllAds,
};
