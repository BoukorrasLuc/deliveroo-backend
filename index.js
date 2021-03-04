const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
require("dotenv").config();

const data = require("./data.json");

app.get("/", (req, res) => {
  res.json(data);
});

app.listen(process.env.PORT, () => {
  console.log("Server Started");
});
