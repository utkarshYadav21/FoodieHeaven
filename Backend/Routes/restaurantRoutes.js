const express = require("express");
const router = express.Router();
const restaurantController = require("../Controllers/restaurantController");

router
  .post("/add", restaurantController.restaurant_add)
  .get("/get", restaurantController.restaurant_get)
  .get("/:id", restaurantController.single_restaurant);

module.exports = router;
