const mongoose = require("mongoose");

const NewSchemesSchema = new mongoose.Schema({

    id:{type:String},
    url:{type:String},
    title:{type:String},
    duration:{type:String},
    price:{type:String},
    shortDescription:{type:String},
    longDescription:{type:String},
    img:{type:String}

},{
    timestamps: true
})

module.exports = mongoose.model("newshemes", NewSchemesSchema);