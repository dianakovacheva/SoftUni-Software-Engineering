const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

const JWT_SECRET = "qfsgdfjgjthkhkhjkj";

async function register(email, password, skillsDescription) {
  const existingUser = await User.findOne({ email }).collation({
    locale: "en",
    strength: 2,
  });

  if (existingUser) {
    throw new Error("Email is taken");
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = await User.create({
    email: email,
    hashedPassword: hashedPassword,
    skillsDescription: skillsDescription,
  });

  return createSession(user);
}

async function login(email, password) {
  const user = await User.findOne({ email }).collation({
    locale: "en",
    strength: 2,
  });

  if (!email) {
    throw new Error("Incorrect email or password");
  }

  const hasMatch = await bcrypt.compare(password, user.hashedPassword);

  if (hasMatch == false) {
    throw new Error("Incorrect email or password");
  }

  return createSession(user);
}

function createSession({ _id, email }) {
  const payload = {
    _id,
    email,
  };

  return jwt.sign(payload, JWT_SECRET);
}

function verifyToken(token) {
  return jwt.verify(token, JWT_SECRET);
}

async function findUserById(userId) {
  return User.findById(userId).lean();
}

async function addToMyAds(ad, authorId) {
  const author = await User.findById(authorId);

  author.myAds.push(ad);
  return author.save();
}

async function deleteFromMyAds(authorId, adId) {
  const author = await User.findById(authorId);
  const indexOfAd = author.myAds.indexOf(adId);
  if (indexOfAd > -1) {
    author.myAds.splice(indexOfAd, 1);
  }
  return author.save();
}

module.exports = {
  register,
  login,
  verifyToken,
  findUserById,
  addToMyAds,
  deleteFromMyAds,
};
