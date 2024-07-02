const express = require("express");
const cors = require("cors");
const app = express();

const dotenv = require("dotenv").config();

const routes = require("./Routes/User");
const connectDatabase = require("./DB/connect");

app.use(cors());
app.use(express.json());

const port = process.env.PORT || 8000;

app.get("/", (req, res) => {
  res.send("Welcome to Blog API");
});

app.use("/api/users", routes);

connectDatabase();

app.listen(port, () => {
  console.log(`Server is connected to port ${port}`);
});
