const mongoose = require("mongoose"),
  Schema = mongoose.Schema;

const UserCartSchema = new Schema(
  {
    username: { type: String, require: true },
    Products: [
      {
        productId: { type: String },
        name: {type:String},
        quantity: {
          type: Number,
          required: true,
          min: [1, "Quantity cannot be less than 1"],
          default: 1,
        },
        price: Number,
        img:{type: String}
      }
    ],
    totalPrice: { type: Number,default: 0},
    Quantity:{type:Number,default:0}
  },
  {
    collection: "cart",
  }
);

module.exports = mongoose.model("cart", UserCartSchema);
