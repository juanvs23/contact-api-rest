require("dotenv").config();
const express = require("express"),
  { contactsRoutes } = require("./routes/index"),
  path = require("path"),
  cors = require("cors"),
  port = process.env.PORT,
  { Server } = require("./classes/server");
const server = new Server(express);

server.uses(cors());
server.uses(express.urlencoded({ extended: true }));
server.uses(express.json());
server.routes("/contacts", contactsRoutes());
server.listen(port,()=>{
  console.log(`running at ${port} port`);
});
