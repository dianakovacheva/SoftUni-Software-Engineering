const Crypto = require("../models/Crypto");

async function getAllCrypto() {
  return Crypto.find({}).lean();
}

async function createCryptoOffer(crypto) {
  return Crypto.create(crypto);
}

async function getCryptoById(cryptoId) {
  return Crypto.findById(cryptoId).lean();
}

module.exports = {
  getAllCrypto,
  createCryptoOffer,
  getCryptoById,
};
