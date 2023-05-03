const Accessory = require('../models/Accessory.js');
const Cube = require('../models/Cube.js');

exports.getAll = async (search = '', fromInput, toInput) => {

    let cubes = await Cube.find().lean();


    // const from = Number(fromInput) || 0;
    // const to = Number(toInput) || 6;

    // const result = cubes
    //     .filter(cube => cube.name.toLowerCase().includes(search?.toLowerCase() || ''))
    //     .filter(cube => cube.difficultyLevel >= from && cube.difficultyLevel <= to);

    return cubes;
};

exports.create = (cube) => Cube.create(cube);

exports.getOne = (cubeId) => Cube.findById(cubeId).populate('accessories');

exports.attachAccessory = async (cubeId, accessoryId) => {
    const cube = await Cube.findById(cubeId);
    const accessory = await Accessory.findById(accessoryId);

    cube.accessories.push(accessory);
    accessory.cubes.push(cube);

    await cube.save();
    await accessory.save();

    return cube;
};
