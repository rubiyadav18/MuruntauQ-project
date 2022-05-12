const bookidgen = require("bookidgen");
const jwt = require("jsonwebtoken");
const moment = require("moment");
const bcrypt = require("bcrypt");

const Banner = require("../model/banner");
const Product = require("../model/product");
const Goldschemes = require("../model/goldschemes");
const Newshemes = require("../model/newschemes");

//Get banner
const getBanner = async (req, res) => {
  try {
    const banner = await Banner.find({ id: req.params.id });
    if (!banner) {
      res.json({ message: "Enter the correct id", status: false });
    }
    // res.json(admin)
    res.json({
      message: "user is found the banner details ",
      data: banner,
      status: true,
    });
  } catch (error) {
    res.json({ message: error.message, status: false });
  }
};

// post banner------------
const postBanner = async (req, res) => {
  let { img, url } = req.body;

  try {
    if (!(img && url)) {
      res.json({ message: "All fields are required", status: false });
    } else {
      const banner = await Banner.create({
        img,
        url,
        id: bookidgen("ID", 14522, 199585),
        time: moment().format("llll"),
      });

      if (!banner) {
        res.json({ message: "Banner is not created", status: false });
      } else {
        res.json({
          message: "banner is created successfully",
          data: banner,
          status: true,
        });
      }
    }
  } catch (error) {
    res.json({ message: error.message, status: false });
  }
};

// patch banner------------
const patchBanner = async (req, res) => {
  //   const { img, url } = req.body;
  try {
    const banner = await Banner.findOneAndUpdate();
    if (!banner) {
      res.json({ message: "Enter the correct id", status: false });
    } else {
      res.json({
        message: "user  edited is successfully",
        data: banner,
        status: true,
      });
    }
  } catch (error) {
    res.json({ message: error.message, status: false });
    // res.status(400).send(error);
  }
};

// Delete banner------------
const deleteBanner = async (req, res) => {
  try {
    const banner = await Banner.findOneAndDelete({ id: req.params.id });
    if (!banner) {
      res.json({ message: "Enter the correct id", status: false });
    } else {
      res.send({
        message: "banner is deteled successfuly",
        data: banner,
        status: true,
      });
    }
  } catch (error) {
    res.send({ message: error.message, status: false });
  }
};

// post-product------
const postProduct = async (req, res) => {
  let {
    productName,
    price,
    shortDescription,
    longDescription,
    weight,
    colour,
    URL,
    size,
    photo,
  } = req.body;

  try {
    if (
      !(productName && price && shortDescription && longDescription,
      weight && colour && URL && size && photo)
    ) {
      res.json({ message: "All fields are required", status: false });
    } else {
      const product = await Product.create({
        productName,
        price,
        longDescription,
        weight,
        URL,
        size,
        colour,
        photo,
        shortDescription,
        id: bookidgen("ID", 14522, 199585),
      });

      if (!product) {
        res.json({
          message: "Enter the product is not correct--",
          status: false,
        });
      } else {
        res.json({
          message: "Product is created successsfully",
          data: product,
          status: true,
        });
      }
    }
  } catch (error) {
    res.json({ message: error.message, status: false });
  }
};

// get product---------------

const getProduct = async (req, res) => {
  try {
    const product = await Product.findOne({ id: req.params.id });
    if (!product) {
      res.json({ message: "Enter the correct id", status: false });
    } else {
      res.json({ message: "Product is found", data: product, status: true });
    }
  } catch (error) {
    res.json({ message: error.message, status: false });
  }
};

// patch product------------
const patchProduct = async (req, res) => {
  try {
    const product = await Product.findOneAndUpdate({ id: req.params.id });
    if (!product) {
      res.json({ message: "Enter the correct id", status: false });
    } else {
      res.json({
        message: "Product is edited successsfully",
        data: product,
        status: true,
      });
    }
  } catch (error) {
    res.json({ message: error.message, status: false });
  }
};

// Delete product-----------------
const deleteProduct = async (req, res) => {
  try {
    const product = await Product.findOneAndDelete({ id: req.params.id });
    if (!product) {
      res.json({ message: "Enter the correct id", status: false });
    } else {
      res.send({ message: "Product is deleted successfully", status: true });
    }
  } catch (error) {
    res.send({ message: error.message, status: false });
  }
};

// post Goldschemes
// const postgoldschemes = async (req, res) => {
//     let {
//       id,
//       totalIntallment,
//       paidIntallment,
//       startingDate,
//       endingDate,
//       totalWeight,
//       freezedPrice,
//     } = req.body;

//     try {
//       if (
//         !(id && totalIntallment && paidIntallment && startingDate &&
//         endingDate && totalWeight && freezedPrice)
//       ) {
//         res.json({ message: "All fields are required", status: false });
//       } else {
//         const goldScheme = await Goldschemes.create({
//             id,
//           totalIntallment,
//           paidIntallment,
//           startingDate,
//           endingDate,
//           totalWeight,
//           freezedPrice,
//           id: bookidgen("ID", 14522, 199585),
//         });

//         if (!goldScheme) {
//           res.json({
//             message: "Enter the goldschems is not correct--",
//             status: false,
//           });
//         } else {
//           res.json({
//             message: "goldschemes is created successsfully",
//             data: goldScheme,
//             status: true,
//           });
//         }
//       }
//     } catch (error) {
//       res.json({ message: error.message, status: false });
//     }
//   };

// // Get goldchemes
// const getgoldschemes = async (req, res) => {
//     try {
//       const goldchemes = await Goldschemes.find({ id: req.params.id });
//       if (!goldchemes) {
//         res.json({ message: "Enter the correct id", status: false });
//       } else {
//         res.json({ message: "goldschemes is found", data: goldchemes, status: true });
//       }
//     } catch (error) {
//       res.json({ message: error.message, status: false });
//     }
//   };

// // patch goldschemes-
// const patchgoldschemes = async (req, res) => {
//     try {
//       const goldchemes = await Goldschemes.findOneAndUpdate({ id: req.params.id });
//       if (!goldchemes) {
//         res.json({ message: "Enter the correct id", status: false });
//       } else {
//         res.json({
//           message: " goldschemes is edited successsfully",
//           data: goldchemes,
//           status: true,
//         });
//       }
//     } catch (error) {
//       res.json({ message: error.message, status: false });
//     }
//   };

// // Delete Goldschemes-
// const deletegoldschemes = async (req, res) => {
//     try {
//       const goldchemes = await Goldschemes.findOneAndDelete({ id: req.params.id });
//       if (!goldchemes) {
//         res.json({ message: "Enter the correct id", status: false });
//       } else {
//         res.send({ message: "goldschemes is deleted successfully", status: true });
//       }
//     } catch (error) {
//       res.send({ message: error.message, status: false });
//     }
//   };

// post newschemes-
const postNewschemes = async (req, res) => {
  let { duration, url, title, shortDescription, longDescription, price, img } =
    req.body;

  try {
    if (
      !(duration && shortDescription && longDescription && price && url && img)
    ) {
      res.json({ message: "All fields are required", status: false });
    } else {
      const newschemes = await Newshemes.create({
        duration,
        url,
        title,
        shortDescription,
        longDescription,
        img,
        id: bookidgen("ID", 14522, 199585),
      });

      if (!newschemes) {
        res.json({
          message: "Enter the newschemes is not correct--",
          status: false,
        });
      } else {
        res.json({
          message: "newschemes is created successsfully",
          data: newschemes,
          status: true,
        });
      }
    }
  } catch (error) {
    res.json({ message: error.message, status: false });
  }
};

// Get newschemes
const getNewschemes = async (req, res) => {
  try {
    const newschemes = await Newshemes.find({ id: req.params.id });
    if (!newschemes) {
      res.json({ message: "Enter the correct id", status: false });
    } else {
      res.json({
        message: " newschemes is found",
        data: newschemes,
        status: true,
      });
    }
  } catch (error) {
    res.json({ message: error.message, status: false });
  }
};

// Patch Newschemes

const patchNewschemes = async (req, res) => {
  try {
    const newschemes = await Newshemes.findOneAndUpdate({ id: req.params.id });
    if (!newschemes) {
      res.json({ message: "Enter the correct id", status: false });
    } else {
      res.json({
        message: "newschemes is edited successsfully",
        data: newschemes,
        status: true,
      });
    }
  } catch (error) {
    res.json({ message: error.message, status: false });
  }
};

// Detele newschemes-
const deleteNewschemes = async (req, res) => {
  try {
    const newschemes = await Newshemes.findOneAndDelete({ id: req.params.id });
    if (!newschemes) {
      res.json({ message: "Enter the correct id", status: false });
    } else {
      res.send({ message: "newschemes is deleted successfully", status: true });
    }
  } catch (error) {
    res.send({ message: error.message, status: false });
  }
};

module.exports = {
  getBanner,
  postBanner,
  patchBanner,
  deleteBanner,
  getProduct,
  postProduct,
  patchProduct,
  deleteProduct,
  postNewschemes,
  getNewschemes,
  patchNewschemes,
  deleteNewschemes,
  //   postgoldschemes,
  //   getgoldschemes,
  //   patchgoldschemes,
  //   deletegoldschemes
};
