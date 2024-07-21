const signUpController = require("../controllers/authController/signUpController");
const signInController = require("../controllers/authController/signInController");

const express = require("express");
const authRouter = express.Router();

authRouter.post("/register",signUpController);
authRouter.post("/login",signInController);


module.exports = authRouter;

 