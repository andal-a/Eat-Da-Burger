//Establish Dependencies
var express = require("express");

//Set-Up Express App
var PORT = process.env.PORT || 8080;
var app = express();

//Serve static content for app
app.use(express.static("public"));

//Sets up the Express App to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Require handlebars
var exphb = require("express-handlebars");

app.engine("handlebars", exphb({defaultLayout: "main"}));
app.set("view engine", "handlebars");

//Import routes and give server access
var routes = require("./controllers/burgers_controller.js");

app.use("/", routes);

//Starts the server to begin listening
app.listen(PORT, function() {
    console.log("App listening on http://localhost: " + PORT);
});	