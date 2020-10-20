//Dependencies
var orm = require("../config/orm");

//Burger Model
var burgers = {
    //SelectAll method to call orm.selectAll
    selectAll: function(callback){
        orm.selectAll("burgers", function(res) {
            callback(res);
        });
    },
    //Calls orm.insert
    insertOne: function(cols, vals, callback){
        orm.insertOne("burgers", cols, vals, function(res){
            callback(res);
        });
    },
    //Calls orm.updateOne
    updateOne: function(objColVals, condition, callback){
        orm.updateOne("burgers", objColVals, condition, function(res){
            callback(res);
        });
    },
    //Calls orm.delete
    deleteOne: function(condition, callback){
        orm.delete("burgers", condition, function(res){
            callback(res);
        });
    }
};
//Makes Burger Model available for other files
module.exports = burgers;