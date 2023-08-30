const { isGuest } = require("../middlewares/guards");
const { register, login } = require("../services/userService");
const { parseError } = require("../util/parser");

const authController = require("express").Router();

authController.post("/register", isGuest, async (req, res) => {
  try {
    if (req.body.email == "" || req.body.password == "") {
      throw new Error("All fields required.");
    }

    if (req.body.password.length < 8) {
      throw new Error("The password must be at least 8 characters long.");
    }

    if (req.body.password != req.body.rePass) {
      throw new Error("Passwords don't match.");
    }

    const token = await register(
      req.body.firstName,
      req.body.lastName,
      req.body.email,
      req.body.password
    );

    res.cookie("token", token);
  } catch (error) {
    const errors = parseError(error);

    res.status(409).send({ message: `${errors}` });
    return;
  }
});

authController.post("/login", async (req, res) => {
  try {
    const token = await login(req.body.email, req.body.password);
    res.cookie("token", token);
  } catch (error) {
    const errors = parseError(error);

    res.status(409).send({ message: `${errors}` });
    return;
  }
});

authController.post("/logout", (req, res) => {
  res.clearCookie("token").status(204).send({ message: "Logged out!" });
});

module.exports = authController;
