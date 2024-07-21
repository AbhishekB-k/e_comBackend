require("dotenv").config();
const express = require("express");
const connect = require("./src/config/db.js");
const authRouter = require("./src/routes/authRoutes.js");
const productRouter = require("./src/routes/productRoutes.js");
const cartRouter = require("./src/routes/cartRoutes.js");
const cor = require("cors");

const app = express();
app.use(cor({ origin: true }));
app.use(express.json());
app.use("/api/v1/auth",authRouter);
app.use("/api/v1/product",productRouter);
app.use("/api/v1/cart",cartRouter);

app.listen(process.env.PORT,async()=>{
    try {
        await connect();
        console.log(`--------------------Server Started at ${process.env.PORT}------------------------`);
    } catch (error) {
        console.log("Error:",error.message);
    }
});