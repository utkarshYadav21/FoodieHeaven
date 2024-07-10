const Restaurant = require("../Models/Restaurant");

module.exports.restaurant_add = async (req, res) => {
  try {
    let restaurant = new Restaurant(req.body);
    restaurant = await restaurant.save();
    console.log("Saved Restaurant:", restaurant);
    res.status(200).json({ status: "Success", restaurant: restaurant });
  } catch (err) {
    console.log(err.message);
  }
};
module.exports.restaurant_get = async (req, res) => {
  try {
    let restaurants = [];
    restaurants = await Restaurant.find();
    console.log("List of all the restaurants", restaurants);
    res.status(200).json({ status: "Success", restaurants: restaurants });
  } catch (err) {
    console.log(err.message);
  }
};
module.exports.single_restaurant = async (req, res) => {
  try {
    const restaurantId = req.params.id;
    let restaurants = await Restaurant.findById(restaurantId);
    console.log("Restaurant:", restaurants);
    res.status(200).json({ status: "Success", restaurants: restaurants });
  } catch (err) {
    console.log(err.message);
  }
};
