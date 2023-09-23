const mongoose = require("mongoose");

const PlanetSchema = new mongoose.Schema({
  keplerName: {
    type: String,
    required: true,
  },
});

const PlanetModel = mongoose.model("Planet", PlanetSchema);
module.exports = PlanetModel;
