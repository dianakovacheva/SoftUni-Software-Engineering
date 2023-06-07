const Game = require("../models/Game");

function getAll() {
  return Game.find({}).lean();
}

async function createGameOffer(gameOffer) {
  return Game.create(gameOffer);
}

module.exports = {
  getAll,
  createGameOffer,
};
