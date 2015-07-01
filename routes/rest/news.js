module.exports = function(express, rest){ 

	var mysql = require("../../config.js").mysql_connection;

	var news = express();
	var squel = require("squel");
	rest.use('/news', news); //   .../rest/news

	// rest/news?q=N - GET N NUMBER OF NEWS OR ALL OF THEM WITHOUT Q...
	news.get("/", function(req, res){
		var maxQueries = req.query.q || 15;

		//ALL DATA FOR THIS QUERY
		var query = squel.select()
			.from("gamejam_compos_notifications")
			.field("title")
			.field("date")
			.field("content")
			.where("type = 1")
			.order("date", false) //FALSE PARA QUE SEA DESC
			.limit(maxQueries)
			.toString();

		mysql.query(query, function(err, rows) {
			console.log(req.query);
			if(err) res.send("error de conexion");
	  		// connected! (unless `err` is set)	  		
	  		res.status(200).json(rows);
		});
	});

	//TO DO MORE QUERIES

	
}