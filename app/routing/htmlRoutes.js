var express = require('express');
var app = express();
var path = require("path");
var http = require("http");
var request = require("request");

// setInterval(function() {
//     http.get("http://grab.herokuapp.com");
// }, 200000); // every 5 minutes (300000)

app.use(express.static('public', {
  extensions: ['html', 'htm'],
}));
  module.exports = function (app) {
    
  app.use(function(req, res) {

    res.sendFile(path.join(__dirname + "/../public/index.html"));
    res.sendFile(path.join(__dirname + "/../public/about.html"));
    
  });
};

console.log("html route found (◕‿◕✿)");