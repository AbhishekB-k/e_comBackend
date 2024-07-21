const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    number:{
        type:Number,
        required:true,
        unique:true
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
},{
    versionKey: false,
    timestamps: true,
  });

userSchema.pre("save",function(next){
    if(!this.isModified("password")){
        return next();
    }
    const hash = bcrypt.hashSync(this.password,8);
    this.password = hash;
    next();
})

userSchema.methods.checkPassword = function(password){
    return bcrypt.compareSync(password,this.password);
}

const UserModel = mongoose.model("Users", userSchema);

module.exports = UserModel;
