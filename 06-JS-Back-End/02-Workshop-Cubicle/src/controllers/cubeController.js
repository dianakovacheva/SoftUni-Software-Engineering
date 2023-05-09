const router = require('express').Router();
const cubeService = require('../services/cubeService.js');
const accessoryService = require('../services/accessoryService.js');
const { isAuth } = require('../middlewares/authMiddleware.js');

router.get('/create', isAuth, (req, res) => {
    res.render('create.hbs');
});

router.post('/create', isAuth, async (req, res) => {
    const cube = req.body;
    cube.owner = req.user._id;

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
    const isOwner = cube.owner == req.user?._id;

    res.render('details', { cube, isOwner });

});

router.get('/attach/accessory/:cubeId', isAuth, async (req, res) => {
    const cube = await cubeService.getOne(req.params.cubeId).lean();
    const accessories = await accessoryService.getAllAvailable(cube.accessories).lean();
    res.render('accessory/attach', { cube, accessories });
});

router.post('/attach/accessory/:cubeId', isAuth, async (req, res) => {
    const accessoryId = req.body.accessory;
    await cubeService.attachAccessory(req.params.cubeId, accessoryId);
    res.redirect(`/cube/details/${req.params.cubeId}`);
});

router.get('/edit/:cubeId', isAuth, async (req, res) => {

    const cube = await cubeService.getOne(req.params.cubeId).lean();

    if (cube.owner != req.user._id) {
        return res.redirect('/404');
    };

    if (!cube) {
        return res.redirect('/404');
    }

    res.render('cube/edit', { cube });
});

router.post('/edit/:cubeId', async (req, res) => {
    let modifiedCube = await cubeService.edit(req.params.cubeId, req.body);

    res.redirect(`/cube/details/${modifiedCube._id}`);
});

router.get('/delete/:cubeId', async (req, res) => {
    const cube = await cubeService.getOne(req.params.cubeId).lean();

    // TODO: Add is owner validation
    res.render('cube/delete', { cube });
});

router.post('/delete/:cubeId', async (req, res) => {
    await cubeService.delete(re.params.cubeId);
    res.redirect('/');
});

module.exports = router;