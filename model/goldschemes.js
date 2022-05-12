const mongoose = require("mongoose");

const GoldSchemesSchema = new mongoose.Schema({

    id:{type:String},
    totalIntallment:{type:String},
    paidIntallment:{type:String},
    startingDate:{type:String},
    endingDate:{type:String},
    totalWeight:{type:String},
    freezedPrice:{type:String}


},
{
  
  timestamps: true

});

module.exports = mongoose.model("goldschemes", GoldSchemesSchema);


