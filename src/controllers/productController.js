const productModel = require("../models/productModel");

const getSingleProduct = async (req,res)=>{
    try {
        console.log(req.query);
        const data = await productModel.findById(req.query.id).lean().exec();
        return res.status(200).send(data);
    } catch (error) {
        res.status(500).send(error.message);
    }
}

const getSearchProduct = async(req,res)=>{
    try {
        
        const regex = new RegExp(`^${req.query.name}`, 'i');
        const data = await productModel.find({
            $or: [
                { name: { $regex: regex } },
                { category: { $regex: regex } }
            ]
        }).lean().exec();
        
        return res.status(200).send(data);
    } catch (error) {
        res.status(500).send(error.message);
    }
}

module.exports={
    getSingleProduct,
    getSearchProduct,
}
