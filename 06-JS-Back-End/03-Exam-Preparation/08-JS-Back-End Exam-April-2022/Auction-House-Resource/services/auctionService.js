const Auction = require("../models/Auction");

async function getAllAuctions() {
  return await Auction.find({}).lean();
}

async function createAuction(auctionData) {
  return await Auction.create(auctionData);
}

module.exports = {
  getAllAuctions,
  createAuction,
};
