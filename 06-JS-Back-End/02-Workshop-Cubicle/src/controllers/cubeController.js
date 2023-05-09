const router = require('express').Router();
const cubeService = require('../services/cubeService.js');
const accessoryService = require('../services/accessoryService.js');

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
    const cube = await cubeService.getOneDetails(req.params.id).lean();
    try {
        res.render('details', { cube });
    }
    catch (err) {
        console.error(err);
    };
});

router.get('/attach/accessory/:cubeId', async (req, res) => {
    const cube = await cubeService.getOne(req.params.cubeId).lean();
    const accessories = await accessoryService.getAllAvailable(cube.accessories).lean();
    res.render('accessory/attach', { cube, accessories });
});

router.post('/attach/accessory/:cubeId', async (req, res) => {
    const accessoryId = req.body.accessory;
    await cubeService.attachAccessory(req.params.cubeId, accessoryId);
    res.redirect(`/cube/details/${req.params.cubeId}`);
});

router.get('/edit/:cubeId', async (req, res) => {

    console.log(req.user);


    const cube = await cubeService.getOne(req.params.cubeId).lean();

    if (!cube) {
        return res.redirect('/404');
    }

    res.render('cube/edit', { cube });
});

router.post('/edit/:cubeId', async (req, res) => {
    let modifiedCube = await cubeService.edit(req.params.cubeId, req.body);

    res.redirect(`/cube/details/${modifiedCube._id}`);
});

module.exports = router;