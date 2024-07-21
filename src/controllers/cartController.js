const cart = require("../models/cartModel");

const addToCart = async (req,res)=>{
    try {
        const data = req.body;
        data.status = true; 
        data.count = 1;
        await cart.create(data);
        return res.status(200).send("success");
    } catch (error) {
        res.status(500).send("failed!!");
    }
}


const getCartData = async (req,res)=>{
    try {
        const cartData = await cart.find({
            $and: [
                { user_id: req.query.user_id},
                { status:true},
            ]
        }).lean().exec();

        return res.status(201).send(cartData);
    } catch (error) {
       res.status(500).send(error.message); 
    }
}

module.exports = {
    addToCart,
    getCartData,
}