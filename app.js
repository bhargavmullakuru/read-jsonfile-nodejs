/**
 * Node.js Project for Reading Json files based on routes...
 * Author: Sai Bhargav M
 **/

var http = require("http");
var express = require("express");
var bodyParser = require("body-parser");

var app = express();

app.locals.pretty = true;
app.set("port", 8000); // Setting port to 8000 by default
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
require("./app/server/routes")(app);

http.createServer(app).listen(app.get("port"), function () {
  console.log("server listening on port " + app.get("port"));
});
