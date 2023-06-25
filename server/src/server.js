const http = require("http");
const { LoadPlanetData } = require("./models/planets.model");
require("dotenv").config();

const { app } = require("./app");
const PORT = process.env.PORT || 8000;

const server = http.createServer(app);
async function startServer() {
  await LoadPlanetData();
  server.listen(PORT, () => {
    console.log(`SERVER listening on port ${PORT}`);
  });
}

startServer();
