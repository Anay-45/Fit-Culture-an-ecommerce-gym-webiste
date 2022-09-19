const express = require("express");
const route = express.Router();
const Favourite = require("../models/favourite");
const Products = require("../models/products");

route.get("/favourites/:username", async (req, res) => {
  const username = req.params.username;
  try {
    const result = await Favourite.findOne({ username });
    res.json({ status: "ok", result: result.Products });
  } catch (err) {
    res.json({ status: "err", err });
  }
});

route.post("/favourites", async (req, res) => {
  const { username, productId } = req.body;
  try {
    let favourite = await Favourite.findOne({ username });
    let product = await Products.findOne({ _id: productId });
    if (!product) {
      res.send({ status: "error", err });
    }
    const productName = product.name;
    const img = product.img;
    const Rating = product.Rating;
    if (!favourite) {
      const savefavourite = await Favourite.create({
        username,
        Products: [{ productId, productName, img, Rating }],
      });
      console.log(savefavourite);
    } else {
      let favouriteindex = favourite.Products.findIndex(
        (f) => f.productId == productId
      );
      if (favouriteindex > -1) {
        
        return res.json({
          status: "ok",
          message: "Product is in your Favourite List",
        });
        
      } else {
        favourite.Products.push({ productId, productName, img, Rating });
      }
      favourite = await favourite.save();
    }
  } catch (err) {
    return res.json({ status: "error", err });
  }
  res.json({
    status: "ok",
    message: "successfully added",
  });
});

module.exports = route