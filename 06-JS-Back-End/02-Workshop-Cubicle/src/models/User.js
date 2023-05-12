const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    emailAddress: {
        type: String,
        required: [true, 'Email address is required'],
        unique: [true, 'Email address is already taken'],
        validate: /[A-Za-z0-9 ]/,
        minlength: 5,
    },
    password: {
        type: String,
        required: [true, 'Password is required'],
        validate: /[A-Za-z0-9 ]/,
        minlength: 8,
    },
});

userSchema.virtual('repeatPassword').set(function (value) {
    if (this.password !== value) {
        throw new Error('Repeat password don\'t match password');
    };
});

const User = mongoose.model('User', userSchema);

module.exports = User;