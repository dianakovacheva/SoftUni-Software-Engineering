const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

const JWT_SECRET = "qfsgdfjgjthkhkhjkj";

async function register(username, email, password) {
  const existingUserName = await User.findOne({ username }).collation({
    locale: "en",
    strength: 2,
  });

  const existingEmail = await User.findOne({ email }).collation({
    locale: "en",
    strength: 2,
  });

  if (existingUserName) {
    throw new Error("Username is taken");
  }

  if (existingEmail) {
    throw new Error("Email is taken");
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = await User.create({
    username,
    email,
    hashedPassword,
  });

  return createSession(user);
}

async function login(username, password) {
  const user = await User.findOne({ username }).collation({
    locale: "en",
    strength: 2,
  });

  if (!user) {
    throw new Error("Incorrect username or password");
  }

  const hasMatch = await bcrypt.compare(password, user.hashedPassword);

  if (hasMatch == false) {
    throw new Error("Incorrect username or password");
  }

  return createSession(user);
}

function createSession({ _id, username, email }) {
  const payload = {
    _id,
    username,
    email,
  };

  return jwt.sign(payload, JWT_SECRET);
}

function verifyToken(token) {
  return jwt.verify(token, JWT_SECRET);
}

module.exports = {
  register,
  login,
  verifyToken,
};
