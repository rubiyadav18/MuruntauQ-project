const express = require("express");
const router = express.Router();

const admin = require("../controllers/admin");
console.log(admin)

// Admin
router.post("/post/admin", admin.postAdmin);

module.exports= router
