const mongoose = require("mongoose");

const PricingPlanSchema = new mongoose.Schema({
    id:{type:String},
    planName:{type:String},
    pricingMonth:{type:String},
    pricingYear:{type:String},
    onboardCapacity:{type:String}

},{
    timestamps: true

})

module.exports = mongoose.model("pricingplan",PricingPlanSchema);