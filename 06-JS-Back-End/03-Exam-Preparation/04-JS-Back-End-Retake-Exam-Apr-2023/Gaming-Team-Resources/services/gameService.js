const Game = require("../models/Game");

async function getAll() {
  return Game.find({}).lean();
}

async function createGameOffer(gameOffer) {
  return Game.create(gameOffer);
}

async function getGameById(id) {
  return Game.findById(id).lean();
}

async function boughtByUser(gameId, userId) {
  const game = await Game.findById(gameId);
  game.boughtBy.push(userId);

  return game.save();
}

async function deleteGame(gameId) {
  return Game.findByIdAndDelete(gameId);
}

async function editGame(gameId, gameData) {
  const game = await Game.findById(gameId);

  game.platform = gameData.platform;
  game.name = gameData.name;
  game.imageUrl = gameData.imageUrl;
  game.price = gameData.price;
  game.genre = gameData.genre;
  game.description = gameData.description;

  return game.save();
}

module.exports = {
  getAll,
  createGameOffer,
  getGameById,
  boughtByUser,
  deleteGame,
  editGame,
};
