// Declare dependecies / libraries we use on our server
var express     = require("express");
var app         = express();


// Create routes (or 'pages' if you want)
app.get("/", function(request, response) {
  response.send("Welcome to the Homepage!");
});

app.get("/about", function(request, response) {
  response.send("Welcome to the About Us page!");
});

app.get("/contact", function(request, response) {
  response.send("Welcome to the Contact Us page!");
});


// Set our server to listen to the port '8081'
app.listen(8081, function() {
  console.log("Running! Visit http://localhost:" + 8081 + " in your browser.");
});
