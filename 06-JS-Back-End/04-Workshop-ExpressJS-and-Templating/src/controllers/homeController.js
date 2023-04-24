const cubes = require('../db.json');

exports.index = ((req, res) => {
    res.render('index.hbs', { cubes });
});

exports.about = ((req, res) => {
    res.render('about.hbs');
});