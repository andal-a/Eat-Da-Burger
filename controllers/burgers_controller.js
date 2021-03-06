//Establish dependencies
var express = require("express");
//Routing refers to how an application's endpoints(URIs) respond to client requests
//router() creates a chainable route handler for a route path
var router = express.Router();
var burgers = require("../models/burger.js");

router.get("/", function(req,res){
//Get Route: receives all da burgers from the burgerbase
	burgers.selectAll(function(data){
		var hbsObject = {
			burgers: data
        };
        
		res.render("index", hbsObject);
	});
});
//Post Route: new burgers may be added to the database **DNA**
router.post("/api/burgers/:id", function(req,res){
    //Adds burger to the database
	burgers.insert(req.body.name, false, function(result){
        if (result.changedRows == 1) {
            return res.status(404).end();
        } else {
          res.status(200).end();
        }
    });
});
//Put Route: updates the burgers that will be devoured
router.put("/api/burgers/:id", function(req,res){
	var id =  req.params.id;
    //Update burger in the database
	burgers.updateOne(id, true, function(result){
        if (result.changedRows == 0) {
            return res.redirect("/burgers");
        } else {
            res.redirect("/burgers");
        }
    });
});

//Delete Route: Deletes the burgers from the burgerbase
router.delete("/api/burgers/:id", function(req,res) {
    burgers.delete({
        where: {
            id: req.params.id
        }
    }).then(function(data) {
        res.redirect("/burgers");
    });
});

//Export routes for server.js to use
module.exports = router;