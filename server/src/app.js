const express = require("express");

const cors = require("cors");
const morgan = require("morgan");
const { planetRouter } = require("./routes/planet/planets.router.js");
var corsOptions = {
  origin: "*",
};
const app = express();
app.use(cors(corsOptions));
app.use(express.json());
app.use(morgan("dev"));
app.use(planetRouter);
app.get("/", (req, res) => {
  return res.send("Welcome to NASA App");
});

module.exports = {
  app,
};
