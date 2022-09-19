const express = require("express");
const route = express.Router();
const Cart = require("../models/cart");
const Products = require("../models/products");
route.get("/cart/:username", async (req, res) => {
  const username = req.params.username;
  try {
    const result = await Cart.find({ username }).exec();
    res.json({ status: "ok", result: result });
  } catch (err) {
    res.json({ status: "err", err });
  }
});
route.post("/deccart", async (req, res) => {
  try {
    const { username, id } = req.body;
    let cart = await Cart.findOne({ username });
    let product = await Products.findOne({ _id: id });

    let productindex = cart.Products.findIndex(
      (p) => p.productId === id
    );
    let sprice = product.price;
    if (cart.Products[productindex].quantity == 1) {
      cart.Products = cart.Products.filter((p) => p.productId !== id);
      cart.totalPrice-=sprice;
      
    } else {
      cart.Products[productindex].quantity--;
      cart.totalPrice-=sprice;
    }
    cart.Quantity--;
    cart = await cart.save();
    product.Quantity++;
    product = await product.save();
  } catch (err) {
    console.log(err);
    return res.json({ status: "error", err });
  }
  res.json({
    status: "ok",
    message: "successfully removed",
  });
});
route.post("/inccart", async (req, res) => {
    try {
      const { username, id } = req.body;
      let cart = await Cart.findOne({ username });
      let product = await Products.findOne({ _id: id });
  
      let productindex = cart.Products.findIndex(
        (p) => p.productId === id
      );
      let sprice = product.price;
      if (product.Quantity==0) {
       return res.json({status:"error", err: "max limit reached"});
      } 

      cart.Products[productindex].quantity++;
      cart.totalPrice+=sprice;
      cart.Quantity++;
      cart = await cart.save();
      product.Quantity--;
      product = await product.save();
    } catch (err) {
      console.log(err);
      return res.json({ status: "error", err });
    }
    res.json({
      status: "ok",
      message: "successfully added",
    });
  });
route.post("/addcart", async (req, res) => {
  const { username, productId, quantity } = req.body;
  try {
    let cart = await Cart.findOne({ username });
    let product = await Products.findOne({ _id: productId });
    if (!product) {
      res.send({ status: "error", err });
    }
    if (product.Quantity < quantity) {
      res.send({ status: "error", err: "items not available" });
    }
    const name = product.name;
    const price = product.price;
    const img = product.img;
    if (!cart) {
      const savecart = await Cart.create({
        username,
        Products: [{ productId, name, quantity, price, img }],
        totalPrice: quantity * price,
        Quantity:quantity
      });
      console.log(savecart);
    } else {
      let productindex = cart.Products.findIndex(
        (p) => p.productId === productId
      );
      if (productindex > -1) {
        let item = cart.Products[productindex];
        item.quantity += parseInt(quantity);
        cart.Products[productindex] = item;
      } else {
        cart.Products.push({ productId, name, quantity, price, img });
      }
      cart.totalPrice += quantity * price;
      cart.Quantity+= quantity* 1;
      cart = await cart.save();
    }
    product.Quantity -= quantity;
    product = await product.save();
  } catch (err) {
    console.log(err);
    return res.json({ status: "error", err });
  }
  res.json({
    status: "ok",
    message: "successfully added",
  });
});

module.exports = route;
