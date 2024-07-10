const  dishSchema=require( "./DishSchema");

const mongoose = require("mongoose");

const CartSchema = mongoose.Schema({
  userId:{
    type:String
  },
  dishes: [
    {
      dish: {
        dishSchema
      },
      restaurant: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Restaurant",
      },
    },
  ],
});

const Cart = mongoose.model("Cart", CartSchema);
module.exports=Cart
