module.exports = function(express, rest){ 

	var mysql = require("../../config.js").mysql_connection;

	var editions = express();
	var squel = require("squel");
	rest.use('/editions', editions); //   .../rest/editions

	// rest/editions/all - GET THE FULL LIST OF EDITIONS...
	editions.get("/all", function(req, res){
		//ALL DATA FOR THIS QUERY
		var query = squel.select()
			.from("gamejam_compos")
			.toString();
		mysql.query(query, function(err, rows) {
			if(err) res.send("error de conexion");
	  		// connected! (unless `err` is set)
	  		console.log(rows);
	  		res.status(200).json(rows);
		});
	});

	// rest/editions/active - GET ACTIVE EDITION
	/*editions.get("/active", function(req, res){
		//ALL DATA FOR THIS QUERY
		var query = squel.select()
			.from("gamejam_compos", "gc")
			.field("gc.*")
			.field("GROUP_CONCAT(DISTINCT contributors SEPARATOR ',')")
			.from("gamejam_compos_sponsors", "gcs")
			.where("gc.open = 1")
			.where("gcs.compo_id = gc.id")
			.left_join("gamejam_compos_contributors", "contributors",
				"gcs.contributor_id = gamejam_compos_contributors.id")
			.toString();

		mysql.query(query, function(err, rows) {
			if(err) res.send("error de conexion");
	  		// connected! (unless `err` is set)
	  		console.log(query);

	  		//CHECK IF THERES ONLY 1 RESULT TO TAKE THAT ELEMENT, IF NOT RETURN EMPTY OBJECT
	  		var obj = rows.length > 0 ? rows[0] : {};
	  		res.status(200).json(obj);
		});
	});	*/


	//TO DO MORE QUERIES


}