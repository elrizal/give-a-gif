var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var app = express();
var charData = require("../data/characters.js");

	module.exports = function(app) {
		app.get("/api/characters", function(req, res) {
			  res.json(charData);
		});
	app.post("api/characters", function(req, res) {
		console.log(res + "from apiROUTES");
	  });
}
// module.exports = this.takeAPI;
console.log("________________________________"
 + "\n apiRoutes js is here (ᵔᴥᵔ) \n" +
 "________________________________");