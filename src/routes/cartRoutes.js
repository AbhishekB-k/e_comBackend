const cartController = require("../controllers/cartController");

const express = require("express")
const cartRouter = express.Router();

cartRouter.post("/addcart",cartController.addToCart);
cartRouter.get("/getcartdata",cartController.getCartData);

module.exports = cartRouter

