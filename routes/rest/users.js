module.exports = function(express, rest){ 

	var mysql = require("../../config.js").mysql_connection;

	var users = express();
	rest.use('/users', users); //   .../rest/users

	// rest/users/all - GET THE FULL LIST OF USERS WITH NAME...
	users.get("/all", function(req, res){
		//res.json("[]", 200);

		mysql.query('SELECT * FROM USUARIO', function(err, rows) {
			if(err) res.send("error de conexion");
	  		// connected! (unless `err` is set)
	  		console.log(rows);
	  		var resultado = JSON.stringify(rows);
	  		resultado = unescape(resultado);
	  		res.send(resultado);
		});

	});


}