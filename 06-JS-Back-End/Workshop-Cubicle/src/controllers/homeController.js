const router = require('express').Router();
const cubes = require('../db.json');

router.get('/', (req, res) => {
    res.render('index.hbs', { cubes });
});

router.get('/about', (req, res) => {
    res.render('about.hbs');
});




module.exports = router;