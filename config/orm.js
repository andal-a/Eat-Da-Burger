//This file offers a set of easier-to-use methods for interacting with the MySQL db.
//----------------------------------------------------------------------------------
// Dependencies
var connection = require("./connection.js");

/*function printQuestionMarks(num) {
	var arr = [];

	for (var i=0; i<num; i++){
		arr.push("?");
	}
	return arr.toString();
}

function objToSql(ob){
	var arr = [];

	for(var key in ob){
		var value = ob[key];
		if(Object.hasOwnProperty.call(ob, key)){
			if(typeof value === "string" && value.indexOf("") >= 0){
				value = " ' " + value + " ' ";
			}
			arr.push(key + "=" + value);
		}
	}
	return arr.toString();
}*/

// ORMSelect & selectAll method
var orm = { 
    selectAll: function(tableInput, callback) {
        //SQL query string to retun all records
        var queryString = "SELECT * FROM ??";
        //Query String
        connection.query(queryString, [tableInput], function(err,result) {
            if(err) throw err;
        callback(result);
        });
    },
    //insertOne Method to store data in database
    insertOne: function(tableInput, colOneInput, colTwoInput, colOneValue, colTwoValue, callback) {
        var queryString = "INSERT INTO ?? (??, ??) VALUES (?, ?)";
    
        console.log(queryString);
        //Query String
        connection.query(queryString, [tableInput, colOneInput, colTwoInput, colOneValue, colTwoValue], function(err, result) {
            if(err) throw err;
            callback(result);
        });
    },
    //UpdateOne Method to update data in database
    updateOne: function(table, objColVals, condition, callback) {
        //SQL Query String - Update Record
        var queryString = "UPDATE " + table;
        queryString += "SET";
        queryString += objToSql(objColVals);
        queryString += " WHERE ";
        queryString += condition;
        //Query String
        connection.query(queryString, function(err, result) {
            if(err) throw err;
            callback(result);
        });
    }
};
//Export ORM object
module.exports = orm;
