module.exports = function(express, rest){ 

	var users = express();
	rest.use('/users', users); //   .../rest/users

	// rest/users/all - GET THE FULL LIST OF USERS WITH NAME...
	users.get("/all", function(req, res){
		res.send("[]");
	});


}