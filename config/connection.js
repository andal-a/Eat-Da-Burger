// *********************************************************************************
// CONNECTION.JS - THIS FILE INITIATES THE CONNECTION TO MYSQL
// *********************************************************************************
var mysql = require("mysql");

//Connections in source object
//We use source.[name of connection] to hook into mysql
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "Tuxenosm7782!",
    database: "burgers_db"
});

//Establish connection to the database
connection.connect(function(err) {
    if (err) {
      console.error("error connecting: " + err.stack);
      return;
    }
    console.log("connected as id " + connection.threadId);
});
//Export the connection
module.exports = connection;