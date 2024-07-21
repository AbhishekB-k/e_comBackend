const User = require("../../models/userModel");
const generateToken = require("../../utils/createToken");

module.exports = async (req,res)=>{
    try {
        let data = req.body
        data.number = parseInt(data.number);
        console.log(data); 
        const user = await User.create(data);
        console.log(user);
        const token = generateToken(user._id);
        return (
            res.status(201).send({token})
        )
    } catch (error) {
        console.log(error);
        res.status(500).send(error.message);
    }
};