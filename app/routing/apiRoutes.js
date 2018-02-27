
require("./api/friends")(app);
require("./api/friends")(app);


app.get('/', function (req, res) {
  res.send('./api/friends')
})

// POST method route
app.post('/', function (req, res) {
  res.send('./api/friends')
})