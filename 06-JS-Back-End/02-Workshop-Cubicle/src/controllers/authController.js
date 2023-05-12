const router = require('express').Router();
const authService = require('../services/authService.js');
const { sessionName } = require('../constants.js');
const validator = require('validator');

router.get('/register', (req, res) => {
    res.render('auth/register');
});

router.post('/register', async (req, res, next) => {
    if (!validator.isEmail(req.body.emailAddress)) {
        // return res.status(404).send('Invalid email');
        let error = { message: 'Invalid email' };
        next(error);
    };

    try {
        let createdUser = await authService.register(req.body);
        res.redirect('/auth/login');
    } catch (error) {
        console.log(error.message);
        res.status(401).render('auth/register', { error: error.message });
    };
});

router.get('/login', (req, res) => {
    res.render('auth/login');
});

router.post('/login', async (req, res) => {
    try {
        let token = await authService.login(req.body);

        if (!token) {
            return res.redirect('/404');
        };

        res.cookie(sessionName, token, { httpOnly: true });

        res.redirect('/');
    } catch (error) {
        res.status(400).render('auth/login', { error: error.message });
    };
});

router.get('/logout', (req, res) => {
    res.clearCookie(sessionName);
    res.redirect('/');
});

module.exports = router;