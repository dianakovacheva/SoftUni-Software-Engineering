const router = require('express').Router();
const cubeService = require('../services/cubeService.js');

router.get('/create', (req, res) => {
    res.render('create.hbs');
});

router.post('/create', async (req, res) => {
    const cube = req.body;

    // Validate
    if (cube.name.length < 2) {
        return res.status(400).send('Invalid request');
    };

    try {
        // Save data
        await cubeService.create(cube);

        // Redirect to home page
        res.redirect('/');
    } catch (err) {
        res.status(400).send(err)
    }
});

router.get('/details/:id', async (req, res) => {
    const cube = await cubeService.getOne(req.params.id).lean();
    try {
        res.render('details', { cube });
    }
    catch (err) {
        console.error(err);
    }
});

router.get('/attach/accessory/:cubeId', async (req, res) => {
    const cube = await cubeService.getOne(req.params.cubeId).lean();
    res.render('accessory/attach', { cube });
});


module.exports = router;