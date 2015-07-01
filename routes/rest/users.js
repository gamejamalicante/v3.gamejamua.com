module.exports = function(express, rest){ 

	var mysql = require("../../config.js").mysql_connection;

	var users = express();
	var squel = require("squel");
	rest.use('/users', users); //   .../rest/users

	// rest/users/all - GET THE FULL LIST OF USERS WITH NAME...
	users.get("/all", function(req, res){
		//ALL DATA FOR THIS QUERY
		var query = squel.select()
			.from("gamejam_users")
			.toString();
		mysql.query(query, function(err, rows) {
			if(err) res.send("error de conexion");
	  		// connected! (unless `err` is set)
	  		console.log(rows);
	  		res.status(200).json(rows);
		});
	});


	//TO DO MORE QUERIES


}