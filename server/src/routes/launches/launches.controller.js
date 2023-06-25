const { launches } = require("../../models/launches.model");
const getAllLaunches = (req, res) => {
  res.status(200).json(Array.from(launches.values()));
};

module.exports = {
  getAllLaunches,
};
