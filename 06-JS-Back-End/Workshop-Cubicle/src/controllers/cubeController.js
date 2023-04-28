const router = require('express').Router();
const cubeService = require('../services/cubeService.js');

router.get('/create', (req, res) => {
    res.render('create.hbs');
});

router.post('/create', (req, res) => {
    const cube = req.body;

    // Validate
    if (cube.name.length < 2) {
        return res.status(400).send('Invalid request');
    };

    // Save data
    cubeService.create(cube)
        .then(() => {
            // Redirect to home page
            res.redirect('/');
        })
        .catch(err => {
            res.status(400).send(err);
        });
});

router.get('/details/:_id', (req, res) => {
    const cube = cubeService.getOne(req.params._id);
    res.render('details.hbs', { cube });
});

module.exports = router;