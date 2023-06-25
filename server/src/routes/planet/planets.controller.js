const { planets } = require("../../models/planets.model.js");
function getAllPlanets(req, res) {
  return res.status(200).json({ status: 200, data: planets });
}

module.exports = {
  getAllPlanets,
};
