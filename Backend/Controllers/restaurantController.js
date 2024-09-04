const Restaurant = require("../Models/Restaurant");
const Dishes = require("../Models/DishSchema");

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

module.exports.add_dish = async (req, res) => {
  try {
    const { resId } = req.params;
    let restaurant = await Restaurant.findById(resId);
    
    if (!restaurant) {
      return res
        .status(404)
        .json({ status: "Error", message: "Restaurant not found" });
    }

    let dish = new Dishes(req.body);
    dish = await dish.save();
    restaurant.dishes.push(dish._id);
    restaurant = await restaurant.save();

    console.log("Saved Dish:", dish);

    res.status(200).json({ status: "Success", dish: dish });
  } catch (err) {
    res.status(500).json({
      status: "failed",
      error: err.message,
    });
  }
};

module.exports.restaurant_get = async (req, res) => {
  try {
    let restaurants = await Restaurant.find();

    console.log("List of all the restaurants", restaurants);

    res.status(200).json({ status: "Success", restaurants: restaurants });
  } catch (err) {
    console.log(err.message);
    res.status(500).json({
      status: "failed",
      message: err.message,
    });
  }
};

module.exports.single_restaurant = async (req, res) => {
  try {
    const restaurantId = req.params.id;
    let restaurant = await Restaurant.findById(restaurantId)
      .populate("dishes")
      .populate({
        path: "reviews",
        populate: {
          path: "createdBy", // Populate the 'createdBy' field within each review
        },
      });

    console.log("Restaurant:", restaurant);

    res.status(200).json({ status: "Success", restaurant: restaurant });
  } catch (err) {
    console.log(err.message);
    res.status(500).json({
      status: "failed",
      message: err.message,
    });
  }
};
