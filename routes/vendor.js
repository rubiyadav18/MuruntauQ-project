const express = require("express");
const router = express.Router();

const vendor = require("../controllers/vendor");


//Banners
router.get("/get/banner/:id", vendor.getBanner);
router.post("/post/banner", vendor.postBanner);
router.patch("/patch/banner/:id", vendor.patchBanner);
router.delete("/delete/banner/:id", vendor.deleteBanner);

//Products
router.post("/post/product", vendor.postProduct);
router.get("/get/product/:id", vendor.getProduct);
router.patch("/patch/product/:id", vendor.patchProduct);
router.delete("/delete/product/:id", vendor.deleteProduct);

// GoldSchemes
// router.get("/get/goldschemes/:id",vendor.getgoldschemes);
// router.post("/post/goldschemes", vendor.postgoldschemes);
// router.patch("/patch/goldschemes/:id", vendor.patchgoldschemes);
// router.delete("/delete/goldschemes/:id", vendor.deletegoldschemes);

// newshcemes
router.post("/post/newschemes", vendor.postNewschemes);
router.get("/get/newschemes/:id", vendor.getNewschemes);
router.patch("/patch/newschemes/:id", vendor.patchNewschemes);
router.delete("/delete/newschemes/:id", vendor.deleteNewschemes);

module.exports = router;
