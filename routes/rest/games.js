module.exports = function(express, rest){ 

	var mysql = require("../../config.js").mysql_connection;

	var games = express();
	var squel = require("squel");
	rest.use('/games', games); //   .../rest/games

	//rest/games/all GET ALL GAMES WITH ALL INFO... STILL HAVE TO COMPLETE
	games.get("/all", function(req, res){
		//ALL DATA FOR THIS QUERY
		var query = squel.select()
			.from("gamejam_games", "g")
			.from("gamejam_games_media", "gm")
			.where("g.id = gm.game_id")
			.toString();

		mysql.query(query, function(err, rows) {
			if(err) res.send("error de conexion");
	  		// connected! (unless `err` is set)
	  		console.log(rows);
	  		res.status(200).json(rows);
		});
	});


	// rest/games?q=N - GET N NUMBER OF GAMES...
	games.get("/", function(req, res){
		var maxQueries = req.query.q || 15;
		//ALL DATA FOR THIS QUERY
		var query = squel.select()
			.from("gamejam_games", "g")
			.from("gamejam_games_media", "gm")
			.field("g.name")
			.field("gm.url")
			.where("g.id = gm.game_id")
			.toString();

		mysql.query(query+" ORDER BY RAND() LIMIT "+maxQueries, function(err, rows) {
			if(err) res.send("error de conexion");
	  		// connected! (unless `err` is set)
	  		console.log(rows);
	  		res.status(200).json(rows);
		});
	});

	// rest/games?ed=N - GET GAMES OF N EDITION
	
	// rest/games?usr=ID GET GAMES OF ID USER

	// rest/games?mod=rapido, plataformas... GET GAMES WITH THOSE MODIFIERS
	
	//TO DO MORE QUERIES

	
}