

var express = require('express');
var app = express();
var http = require('http').Server(app);

var config = require('./config.js'); //ARCHIVO DE CONFIGURACION GENERICO

var port = process.env.PORT || 3000;

//DEFINE LA CARPETA DESDE LA CUAL SE SIRVEN ARCHIVOS ESTATICOS (CSS, JS, IMGS, etc...)
app.use(express.static('public')); 

//SUBROUTE_REST
var rest = express();
app.use('/rest', rest);

//CARGAMOS LAS RUTAS
require('./routes/rest/users.js')(express, rest);

/*
rest.get('/', function (req, res) {
  res.send('REST ROUTE');
});
*/

/*app.get('/query', function(req, res){
	var sql = config.mysql_connection;

	sql.query('SELECT * FROM COMENTARIO', function(err, rows) {
		if(err) res.send("error de conexion");
  		// connected! (unless `err` is set)
  		console.log(rows);
  		var resultado = JSON.stringify(rows);
  		resultado = unescape(resultado);
  		res.send(resultado);
	});

});
*/

//INICIAMOS EL SERVIDOR
http.listen(port, function(){
  console.log('listening on *:'+port);
});