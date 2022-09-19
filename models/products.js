const mongoose = require("mongoose");
const ProductSchema = new mongoose.Schema(
  {
    name: { type: String, unique: true },
    type: { type: String },
    Quantity: { type: Number },
    Rating: { type: Number, min: 0.0, max: 5.0 },
    Company: { type: String },
    price: { type: Number },
    img: {
      type: String,
    },
  },
  {
    collection: "products",
  }
);

module.exports = mongoose.model("products", ProductSchema);
