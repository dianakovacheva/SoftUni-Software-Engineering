const fs = require('fs/promises');
const path = require('path');

const cubes = require('../db.json');

exports.getAll = (search, from, to) => {
    console.log(search);
    const result = cubes
        .filter(cube => cube.name.toLowerCase().includes(search?.toLowerCase() || ''))
        .filter(cube => cube.difficultyLevel >= from)
        .filter(cube => cube.difficultyLevel <= to);

    return result;
};

exports.create = (cube) => {
    cubes.push({ _id: cubes[cubes.length - 1]._id + 1, ...cube });
    let textData = JSON.stringify(cubes, '', 4);

    return fs.writeFile(path.resolve('src', 'db.json'), textData, { encoding: 'utf-8' });
};

exports.getOne = (cubeId) => cubes[cubeId];