const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema({
    user_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Users",
        required: true,
    },
    product_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Products",
        required:true,
    },
    count:{
        type:Number,
        required:true,
    },
    status:{
        type:Boolean,
        required:true,
    }
},{
    versionKey: false,
    timestamps: true,
  });

  const cartModel = mongoose.model("cart",cartSchema);

  module.exports = cartModel;