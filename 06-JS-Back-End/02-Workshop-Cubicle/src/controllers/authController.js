const router = require('express').Router();
const authService = require('../services/authService.js');
const { sessionName } = require('../constants.js');
const validator = require('validator');

router.get('/register', (req, res) => {
    res.render('auth/register');
});

router.post('/register', async (req, res) => {
    if (!validator.isEmail(req.body.emailAddress)) {
        return res.status(404).send('Invalid email');
    };

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

router.post('/login', async (req, res) => {
    let token = await authService.login(req.body);

    if (!token) {
        return res.redirect('404');
    };

    res.cookie(sessionName, token, { httpOnly: true });

    res.redirect('/');
});

router.get('/logout', (req, res) => {
    res.clearCookie(sessionName);
    res.redirect('/');
});

module.exports = router;