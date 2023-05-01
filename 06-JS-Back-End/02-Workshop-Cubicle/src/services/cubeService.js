const fs = require('fs/promises');
const path = require('path');
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

exports.getOne = (cubeId) => Cube.findById(cubeId);

