const express = require('express');
const route = express.Router();
const JWT_SECRET = '63br72b3cbc3823rc723c7n23r8237rc732nc7r238n10n20n3r824v7';
const User = require(".././models/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

require(".././config/connect");
route.get("/get", (req, res) => {
    res.json({
      message: "Welcome to the API",
    });
  });
  
  route.post("/login", async (req, res) => {
    const { email, password } = req.body;
  
    const user = await User.findOne({ email }).lean();
    if (!user) {
      return res.json({ status:"error", error: "Invalid username" });
    }
    if (await bcrypt.compare(password, user.password)) {
      return res.json({ status:"ok" ,data: user.token });
    }
    return res.json({ status:"error", error: "Invalid password" });
  });
  route.post("/register", async (req, res) => {
    const { username, email, password: plaintext } = req.body;
    if (!username || typeof username !== "string") {
      return res.json({ status:"error", error: "invalid username" });
    }
    if (!email || typeof email !== "string") {
      return res.json({ status:"error", error: "invalid email" });
    }
    if (!plaintext || typeof plaintext !== "string") {
      return res.json({ status:"error", error: "invalid password" });
    }
    const user = await User.findOne({ email }).lean();
    if (user) {
      return res.json({status:"error",  error: "email in use" });
    }
  
    const password = await bcrypt.hash(plaintext, 10);
  
    try {
        const token = jwt.sign({username: username }, JWT_SECRET);

      const response = await User.create({
        username,
        email,
        password,
        token,
      });
      console.log("user created :" + response);
    } catch (error) {
      if (error.code === 11000) {
        return res.json({ status:"error",
          error
        });
      }
    }
  
    res.json({status:"ok", message:"successfully registered" });
  });

  

module.exports = route;