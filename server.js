
var bodyParser = require('body-parser');
var express = require('express');
var app = express();
var path = require("path");
var http = require("http");

var PORT = process.env.PORT || 3500;
app.use(express.static(path.join(__dirname, "app/public")))
app.use(bodyParser.urlencoded({ 
  extended: false 
}));

app.use(bodyParser.json());
require('./app/routing/apiRoutes.js')(app);
require('./app/routing/htmlRoutes.js')(app);


app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});