const http = require("http");

const app = require("./app");
const mongoose = require("mongoose");

const { loadPlanetsData } = require("./models/planets.model");

const PORT = process.env.PORT || 8000;
const DB_URL = process.env.DATABASE_URI;

const server = http.createServer(app);

mongoose.connection.on("open", (res) => {
  console.log("Connected to Mongoose");
});

mongoose.connection.on("error", (res) => {
  console.log("Error while connecting to Mongoose");
});

async function startServer() {
  await loadPlanetsData();
  await mongoose.connect(
    "mongodb+srv://graphql:graphql12345@cluster0.sad7oad.mongodb.net/test"
  );
  server.listen(PORT, () => {
    console.log(`Listening on port ${PORT}...`);
  });
}

startServer();
