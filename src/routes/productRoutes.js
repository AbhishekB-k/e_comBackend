const productController = require("../controllers/productController")
const express = require("express");
const productRouter = express.Router();

productRouter.get("/singleproduct",productController.getSingleProduct);
productRouter.get("/searchproduct",productController.getSearchProduct);
module.exports = productRouter