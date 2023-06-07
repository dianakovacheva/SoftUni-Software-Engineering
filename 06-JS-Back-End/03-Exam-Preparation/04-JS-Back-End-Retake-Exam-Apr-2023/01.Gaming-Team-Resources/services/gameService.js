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

async function boughtByUser(gameId, userId) {
  const game = await Game.findById(gameId);
  game.boughtBy.push(userId);

  return game.save();
}

module.exports = {
  getAll,
  createGameOffer,
  getById,
  boughtByUser,
};
