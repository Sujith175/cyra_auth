const express = require("express");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();

const User = require("./Models/User");
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.CONNECTION_STRING);

const port = process.env.PORT || 8000;

app.get("/", (req, res) => {
  res.send("success");
});
app.post("/login", (req, res) => {
  const { email, password } = req.body;
  User.findOne({ email: email }).then((user) => {
    if (user) {
      if (user.password === password) {
        res.json("Success");
      } else {
        res.json("Incorrect Password");
      }
    } else {
      res.json("Something went wrong");
    }
  });
});

app.post("/register", (req, res) => {
  User.create(req.body)
    .then((user) => res.json(user))
    .catch((err) => res.json(err));
});

app.listen(port, () => console.log(`Connected to Port ${port}`));
