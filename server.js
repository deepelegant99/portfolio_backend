const express = require("express");
const mongoose = require("mongoose");
const app = express();
const dbConnection = require("./database/connectDB");
require("dotenv").config();
const PORT = process.env.PORT || 5000;

const cors = require("cors");

app.use(express.json());
app.use(cors());

app.listen(PORT, () => {
  console.log("Listening at port ${PORT}...");
  dbConnection();
});

app.get("/data", (req, res) => {
  res.send("Yellow ");
});
