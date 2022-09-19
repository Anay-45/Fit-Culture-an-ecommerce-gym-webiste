const mongoose = require("mongoose"),
  Schema = mongoose.Schema;

const Favourite = new Schema(
  {
    username: { type: String, required: true },
    Products: [
      {
        productId: { type: String },
        productName: { type: String },
        img: {
          type: String,
        },
        Rating: { type: Number, min: 0.0, max: 5.0 },
      },
    ],
  },
  {
    collection: "favourites",
  }
);

module.exports = mongoose.model("favourites",Favourite)
