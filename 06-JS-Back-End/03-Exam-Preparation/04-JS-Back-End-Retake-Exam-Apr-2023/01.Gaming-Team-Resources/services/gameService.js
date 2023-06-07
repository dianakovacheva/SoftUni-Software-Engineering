const Game = require("../models/Game");

async function getAll() {
  return Game.find({}).lean();
}

async function createGameOffer(gameOffer) {
  return Game.create(gameOffer);
}

async function getById(id) {
  return Game.findById(id).lean();
}

module.exports = {
  getAll,
  createGameOffer,
  getById,
};
