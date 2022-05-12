const mongoose = require("mongoose");

const BannerSchema = new mongoose.Schema({
  id: { type: String },
  img: { type: String },
  url: { type: String },
  time: { type: String },
},
{
  
  timestamps: true

});
module.exports = mongoose.model("banner", BannerSchema);
