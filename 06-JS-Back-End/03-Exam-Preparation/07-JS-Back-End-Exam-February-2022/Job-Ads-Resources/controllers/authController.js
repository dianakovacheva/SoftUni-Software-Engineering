const { register, login } = require("../services/userService");
const { parseError } = require("../util/parser");

const authController = require("express").Router();

authController.get("/register", (req, res) => {
  // TODO replace with actual view by assigment
  res.render("register", {
    title: "Register Page",
  });
});

authController.post("/register", async (req, res) => {
  try {
    if (req.body.username == "" || req.body.password == "") {
      throw new Error("All fields required");
    }

    if (req.body.password.length < 5) {
      throw new Error("The password should be at least 5 characters long");
    }

    if (req.body.password != req.body.repass) {
      throw new Error("Passwords don't match");
    }

    const token = await register(req.body.username, req.body.password);

    // TODO check assignment to see if register creates a session
    res.cookie("token", token);

    // TODO replace with redirect by assignment
    res.redirect("/");
  } catch (error) {
    const errors = parseError(error);
    // TODO add error desplay to actual template from assigment
    res.render("register", {
      title: "Register Page",
      errors,
      body: {
        username: req.body.username,
      },
    });
  }
});

authController.get("/login", (req, res) => {
  // TODO replace with actual view by assigment
  res.render("login", {
    title: "Login Page",
  });
});

authController.post("/login", async (req, res) => {
  try {
    const token = await login(req.body.username, req.body.password);
    res.cookie("token", token);

    // TODO replace with redirect by assignment
    res.redirect("/");
  } catch (error) {
    const errors = parseError(error);
    // TODO add error desplay to actual template from assigment
    res.render("login", {
      title: "Login Page",
      errors,
      body: {
        username: req.body.username,
      },
    });
  }
});

authController.get("/logout", (req, res) => {
  res.clearCookie("token");
  res.redirect("/");
});

module.exports = authController;
