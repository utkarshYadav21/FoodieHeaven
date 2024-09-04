const dishSchema = require("./DishSchema");

const mongoose = require("mongoose");

const CartSchema = mongoose.Schema({
  userId: {
    type: String,
  },
  dishes: [
    {
      dish: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Dishes", // Reference to the Dishes model
      },
      restaurant: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Restaurant",
      },
    },
  ],
});

const Cart = mongoose.model("Cart", CartSchema);
module.exports = Cart;
