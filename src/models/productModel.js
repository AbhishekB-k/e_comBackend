const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    name:{type:String,required:true},
    category:{type:String,required:true},
    price:{type:Number,required:true},
    offer_price:{type:Number,required:true},
    images:{type:Array,required:true},
    description:{type:String,required:true},
    rating:{type:Number,required:true},
},{
    versionKey: false,
    timestamps: true,
  });

  const productModel = mongoose.model("Products",productSchema);

  module.exports = productModel;