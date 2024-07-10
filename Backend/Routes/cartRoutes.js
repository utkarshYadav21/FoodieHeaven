const express = require("express");
const router = express.Router();
const cartController = require("../Controllers/cartController");

router.post("/add",cartController)

module.exports = router;
