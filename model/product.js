const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({

    productName:{type:String},
    price:{type:String},
    shortDescription:{type:String},
    longDescription:{type:String},
    weight:{type:String},
    colour:{type:String},
    URL:{type:String},
    size:{type:String},
    id:{type:String},
    photo:{type:String},
    
},
{
    timestamps: true
})


module.exports = mongoose.model("product", ProductSchema);