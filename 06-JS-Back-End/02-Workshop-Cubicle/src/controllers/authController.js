const router = require('express').Router();
const authService = require('../services/authService.js');

router.get('/register', (req, res) => {
    res.render('auth/register');
});

router.post('/register', async (req, res) => {
    let createdUser = await authService.register(req.body);

    if (createdUser) {
        res.redirect('/auth/login');
    } else {
        // TODO: Add notification
        res.redirect('404');
    };
});

router.get('/login', (req, res) => {
    res.render('auth/login');
});

router.post('/login', (req, res) => {
    console.log(req.body);
    res.end();
});

module.exports = router;