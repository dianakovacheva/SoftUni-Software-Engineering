const bcrypt = require('bcrypt');
const User = require('../models/User.js');
const saltRounds = 10;

exports.register = async ({ username, password, repeatPassword }) => {
    // TODO: Return form validation message
    if (repeatPassword !== password) {
        return false;
    };

    let hashedPassword = await bcrypt.hash(password, saltRounds);

    let createdUser = User.create({
        username,
        password: hashedPassword,
    });

    return createdUser;
};
