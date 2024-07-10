const dishSchema = require("./DishSchema");

const mongoose = require("mongoose");

const RestaurantSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  cardImage: {
    type: String,
    required: true,
  },
  mainImage: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  dishes: [dishSchema],
  location: {
    type: String,
    required: true,
  },
  cuisines: [
    {
      type: String,
    },
  ],
});

const Restaurant = mongoose.model("Restaurant", RestaurantSchema);
module.exports=Restaurant
