const router = require('express').Router();

const homeController = require('./controllers/homeController.js');
const cubeController = require('./controllers/cubeController.js');
const accessoryController = require('./controllers/accessoryController.js');
const authController = require('./controllers/authController.js');

router.use('/', homeController);
router.use('/cube', cubeController);
router.use('/accessory', accessoryController);
router.use('/auth', authController);
router.use('/edit', cubeController);
router.use('/delete', cubeController);
router.use('*', (req, res) => {
    res.render('404');
});

module.exports = router;
