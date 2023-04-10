const http = require('http');
require("dotenv");
const app = require('./app.js');
const PORT =  process.env.PORT || 8000;
const server = http.createServer(app);

server.listen(PORT,()=>{
     console.log(`SERVER listening on port ${PORT}`)
});