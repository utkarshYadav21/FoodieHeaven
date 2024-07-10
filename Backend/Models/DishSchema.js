const mongoose=require("mongoose")

module.exports.DishSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
    default:1
  },
  price: {
    type: Number,
    required: true,
  },
});
