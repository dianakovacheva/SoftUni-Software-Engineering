const Accessory = require('../models/Accessory.js');

exports.create = (accessoryData) => Accessory.create(accessoryData);

exports.getAll = () => Accessory.find();

// Shows all available accessories that are not attached to the cude
exports.getAllAvailable = (ids) => Accessory.find({ _id: { $nin: ids } });