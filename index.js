const express = require("express");


const app = express();

const authRouter = require('./routes/auth');
const ProductsRouter=require('./routes/products');
const cartRouter = require('./routes/cart');
const favouriteRouter = require('./routes/favourite');
require("./config/connect");
require("dotenv").config({ path: "./config.env" });

app.use(express.json());
app.use('/auth', authRouter);
app.use('/home',ProductsRouter);
app.use('/carts',cartRouter);
app.use('/favour',favouriteRouter);
if (process.env.NODE_ENV == "production") {
    app.use(express.static("client/build"));
  
    const path = require("path");
  
    app.get("*", (req, res) => {
      res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
    });
  }

app.listen(process.env.PORT || 5000, () => console.log("Server started on port 5000"));
