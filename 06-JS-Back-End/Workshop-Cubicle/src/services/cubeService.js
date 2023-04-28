const fs = require('fs/promises');
const path = require('path');

const cubes = require('../db.json');

exports.getAll = (search = '', fromInput, toInput) => {
    const from = Number(fromInput) || 0;
    const to = Number(toInput) || 6;

    const result = cubes
        .filter(cube => cube.name.toLowerCase().includes(search?.toLowerCase() || ''))
        .filter(cube => cube.difficultyLevel >= from && cube.difficultyLevel <= to);

    return result;
};

exports.getOne = (cubeId) => cubes[cubeId];

exports.create = (cube) => {
    cubes.push({ _id: cubes[cubes.length - 1]._id + 1, ...cube });
    let textData = JSON.stringify(cubes, '', 4);

    return fs.writeFile(path.resolve('src', 'db.json'), textData, { encoding: 'utf-8' });
};
