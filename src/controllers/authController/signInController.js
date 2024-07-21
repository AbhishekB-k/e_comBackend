const User = require("../../models/userModel");
const generateToken = require("../../utils/createToken");
module.exports = async (req,res)=>{
    try {
        const user = await User.findOne({email:req.body.email});

        if(!user){
            return res.status(401).send("Not Registered");
        }

        const match = await user.checkPassword(req.body.password);
        if(!match){
            res.status(401).send("Password is not correct!! Please check again...")
        }

        const token = generateToken(user.__id);

        return res.status(200).send({token});
    } catch (error) {
        res.status(500).send(error.message);
    }
};