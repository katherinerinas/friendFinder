
var express = require("express");
var bodyParser = require("body-parser");
var app = express();
var Path=require("path");

var PORT = process.env.PORT || 8080;


var jsonParser = bodyParser.json()

var urlencoudedParser = bodyParser.urlencoded({extended:false})

app.use(bodyParser.json({ type: 'application/++json'}))


app.use(bodyParser.raw({type: 'application/vnd.custom-type'}))

app.use(bodyParser.text({type: 'text/html'}))

require("./app/routing/html-routes.js")(app);


app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
