const jwt = require("jsonwebtoken");

const key = process.env.JWT_SECRET_KEY;

module.exports = (data)=>{
    return token = jwt.sign({id:data},key,{expiresIn:60*60*24*7*543});
}