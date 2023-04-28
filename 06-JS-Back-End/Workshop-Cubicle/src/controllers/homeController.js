const router = require('express').Router();
const cubeService = require('../services/cubeService.js');

router.get('/', (req, res) => {
    let { search, from, to } = req.query;

    const cubes = cubeService.getAll(search, from, to);
    res.render('index.hbs', { cubes });
});

router.get('/about', (req, res) => {
    res.render('about.hbs');
});




module.exports = router;