const Crypto = require("../models/Crypto");

async function createCryptoOffer(crypto) {
  return Crypto.create(crypto);
}

async function getAllCrypto() {
  return Crypto.find({}).lean();
}

async function getCryptoById(cryptoId) {
  return Crypto.findById(cryptoId).lean();
}

async function buyACrypto(cryptoId, buyerId) {
  const crypto = await Crypto.findById(cryptoId);

  crypto.buyACrypto.push(buyerId);

  return crypto.save();
}

module.exports = {
  createCryptoOffer,
  getAllCrypto,
  getCryptoById,
  buyACrypto,
};
