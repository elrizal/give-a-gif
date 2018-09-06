var express = require('express');
var app = express();
var path = require("path");
var http = require("http");

setInterval(function() {
    http.get("http://<your app name>.herokuapp.com");
}, 300000); // every 5 minutes (300000)

app.use(express.static('public'));
  module.exports = function (app) {
  app.use(function(req, res) {
    res.sendFile(path.join(__dirname + "/../public/index.html"));
  });
};
console.log("html route found (◕‿◕✿)");