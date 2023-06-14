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

async function deleteACrypto(cryptoId) {
  return await Crypto.findByIdAndDelete(cryptoId);
}

async function editACrypto(cryptoId, cryptoData) {
  const existingCrypto = await Crypto.findById(cryptoId);

  existingCrypto.name = cryptoData.name;
  existingCrypto.imageUrl = cryptoData.imageUrl;
  existingCrypto.price = cryptoData.price;
  existingCrypto.cryptoDescription = cryptoData.cryptoDescription;
  existingCrypto.paymentMethod = cryptoData.paymentMethod;

  return existingCrypto.save();
}

async function search(name, paymentMethod) {
  let crypto = await getAllCrypto();

  if (name) {
    crypto = crypto.filter((x) => x.name.toLowerCase() == name.toLowerCase());
  }

  if (paymentMethod) {
    crypto = crypto.filter((x) => x.paymentMethod == paymentMethod);
  }

  return crypto;
}

module.exports = {
  createCryptoOffer,
  getAllCrypto,
  getCryptoById,
  buyACrypto,
  deleteACrypto,
  editACrypto,
  search,
};
