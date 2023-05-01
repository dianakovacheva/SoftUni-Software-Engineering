const router = require('express').Router();
const cubeService = require('../services/cubeService.js');

router.get('/', async (req, res) => {
    let { search, from, to } = req.query;

    const cubes = await cubeService.getAll(search, from, to);
    res.render('index.hbs', { cubes, search, from, to });
});

router.get('/about', (req, res) => {
    res.render('about.hbs');
});

module.exports = router;