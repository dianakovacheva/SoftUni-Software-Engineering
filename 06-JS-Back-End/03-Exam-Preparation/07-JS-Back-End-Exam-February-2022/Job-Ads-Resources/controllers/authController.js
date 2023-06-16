const { register, login } = require("../services/userService");
const { parseError } = require("../util/parser");

const authController = require("express").Router();

authController.get("/register", (req, res) => {
  res.render("register", {
    title: "Register Page",
  });
});

authController.post("/register", async (req, res) => {
  try {
    if (
      req.body.email == "" ||
      req.body.password == "" ||
      req.body.skillsDescription == ""
    ) {
      throw new Error("All fields required");
    }

    if (req.body.password.length < 5) {
      throw new Error("The password should be at least 5 characters long");
    }

    if (req.body.password != req.body.repass) {
      throw new Error("Passwords don't match");
    }

    const token = await register(
      req.body.email,
      req.body.password,
      req.body.skillsDescription
    );

    res.cookie("token", token);

    res.redirect("/");
  } catch (error) {
    res.render("register", {
      title: "Register Page",
      errors: parseError(error),
      body: {
        email: req.body.email,
        skillsDescription: req.body.skillsDescription,
      },
    });
  }
});

authController.get("/login", (req, res) => {
  res.render("login", {
    title: "Login Page",
  });
});

authController.post("/login", async (req, res) => {
  try {
    const token = await login(req.body.email, req.body.password);
    res.cookie("token", token);

    res.redirect("/");
  } catch (error) {
    res.render("login", {
      title: "Login Page",
      errors: parseError(error),
      body: {
        email: req.body.email,
      },
    });
  }
});

authController.get("/logout", (req, res) => {
  res.clearCookie("token");
  res.redirect("/");
});

module.exports = authController;
