// Declare dependecies / libraries we use on our server
var express     = require("express");
var app         = express();
var mysql       = require("mysql");

/* Connect with a database */
var database = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'sampledb'
});

database.connect();

// Create routes (or 'pages' if you want)

app.get("/", function(request, response) {
  response.send("Welcome to the Homepage");
});

app.get("/users", function(request, response) {
  database.query('SELECT * FROM user', function(error, rows) {
    if (error) throw error;
    var result = JSON.stringify(rows);
    response.send("All the users : " + result);
  });
});

app.post("/user", function(request, response) {
  var values    = {
    userName: request.query.userName,
    userLastname: request.query.userLastname
  };
  database.query('INSERT INTO user SET ?', [values], function(error, rows) {
    if (error) throw error;
    var result = JSON.stringify(rows);
    response.send("Operation held successfully !! :)" + result);
  });
});

app.put("/user", function(request, response) {
  var idUser = request.query.idUser;
  var values = {
    userName: request.query.userName,
    userLastname: request.query.userLastname
  };
  database.query(`UPDATE user SET ? WHERE idUser = ?`, [values, idUser], function(error, rows) {
    if (error) throw error;
    var result = JSON.stringify(rows);
    response.send("Operation held successfully !! :)" + result);
  });
});

app.delete("/user", function(request, response) {
  var idUser = request.query.idUser;
  database.query(`DELETE FROM user WHERE idUser= ?`, [idUser], function(error, rows) {
    if (error) throw error;
    var result = JSON.stringify(rows);
    response.send("Operation held successfully !! :)" + result);
  });
});


app.get("/orders", function(request, response) {
  database.query('SELECT * FROM sampledb.order', function(error, rows) {
    if (error) throw error;
    var result = JSON.stringify(rows);
    response.send("All the orders : " + result);
  });
});


app.get("/about", function(request, response) {
  response.send("Welcome to the About Us page!");
});

app.get("/contact", function(request, response) {
  response.send("Welcome to the Contact Us page!");
});

app.get("/ourTeam", function(request, response) {
  response.send("Welcome to our team page!");
});

app.get("/libraries", function(request, response) {
  response.send("Welcome to the libraries page!");
});


// Set our server to listen to the port '8081'
app.listen(8081, function() {
  console.log("Running! Visit http://localhost:" + 8081 + " in your browser.");
});
