var express = require('express');
var app = express();
var path = require("path");
var http = require("http");
var request = require("request");

app.use(express.static('public', {
  extensions: ['html', 'htm'],
}));
  module.exports = function (app) {
  app.use(function(req, res) {
    res.sendFile(path.join(__dirname + "/../public/index.html"));
  });
};

console.log("html route found (◕‿◕✿)");