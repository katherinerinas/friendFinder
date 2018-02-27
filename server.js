
var express = require("express");
var bodyParser = require("body-parser");
var app = express();
var Path=require("path");

var PORT = process.env.PORT || 8080;






app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


require("./routing/apiRoutes.js")(app);
require("./routing/htmlRoutes.js")(app);


app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
