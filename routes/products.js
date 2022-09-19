const express = require("express");
const route = express.Router();
const Products = require("../models/products");
const multer = require("multer");
const fs = require("fs");
const uploads = require('../middleware/cloudinary.config');




route.post("/addproducts", uploads.single("testImage"), async (req, res) => {
  try {
    const { name, type, Quantity, Rating, Company ,price} = req.body;
    const img =req.file.path
    const SaveImage = await Products.create({
      name,
      type,
      Quantity,
      Rating,
      Company,
      price,
      img,
    });
    console.log(SaveImage);
  } catch (err) {
    return res.json({ status: "error", err });
  }
  res.json({
    status: "ok",
    message: "successfully added",
  });
});

route.get('/products',async(req,res)=>{
  try{
  const result = await Products.find({}).exec();
  res.json({status:"ok",result:result});
  }catch(err){
    res.json({status:"err", err})
  }
});
route.get('/products/:id',async(req,res)=>{
  const id=req.params.id;
  
  try{
  const result = await Products.findOne({_id:id}).exec();
  res.json({status:"ok",result:result});
  }catch(err){
    res.json({status:"err", err})
  }

});

module.exports = route;
