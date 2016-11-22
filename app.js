var express = require("express");
var app = express();

var db = require("./todo");


app.set('view engine', 'ejs');
app.use(express.static(__dirname + "/public"));


app.get('/', function(req, res){
	res.render("index");
});

app.get("/todo", function(req,res){
	var requestData = req.query;
	var tmpArr = [];

	for( var key in requestData) {
		for(var i = 1; i < 6; i++) {
			if(key == "text" + i + "" || key == "select") {
				if(requestData[key] == "on") {
					for(var j = 0; j < db.length; j++) {
						if(db[j][key] !== undefined || db[j].status !== undefined) {
							if(key == "select" && requestData[key] == "on") {
								console.log(db[j].status)
								if(db[j].status == true) {
									tmpArr.push(db[j][key]);
								}
							} else if(key == "select" && requestData[key] == "off") {
								//console.log(db[j].status)
								if(db[j].status == false) {
									tmpArr.push(db[j][key]);
								}
							} else {
								tmpArr.push(db[j][key]);
							}
						}
					}
				}
			}
		}
	}

	res.render("todo", { data: tmpArr });

});

app.listen(40124, function(){
	console.log("I am ready on port "+3000);
});