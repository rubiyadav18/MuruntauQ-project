const bookidgen = require("bookidgen");
const jwt = require("jsonwebtoken");
// const moment = require("moment");
const bcrypt = require("bcrypt");
const Pricingplan = require("../model/pricingplan")



// post pricingplan
const postAdmin = async (req, res) => {
    let {
      id,
      planName,
      pricingMonth,
      pricingYear,
      onboardCapacity,
    } = req.body;
  
    try {
      if (
        !(id && planName && pricingMonth && pricingYear &&
        onboardCapacity )
      ) {
        res.json({ message: "All fields are required", status: false });
      } else {
        const pricingplan = await Pricingplan.create({
            id,
          planName,
          pricingMonth,
          pricingYear,
          onboardCapacity,
          id: bookidgen("ID", 14522, 199585),
        });
  
        if (!pricingplan) {
          res.json({
            message: "Enter the pricingplan is not correct--",
            status: false,
          });
        } else {
          res.json({
            message: "pricingplans is created successsfully",
            data:pricingplan,
            status: true,
          });
        }
      }
    } catch (error) {
      res.json({ message: error.message, status: false });
    }
  };


module.exports = {
    postAdmin,

}