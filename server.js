var express = require('express');
var compression = require('compression'); //COMPRESS DATA FOR FASTER LOADING
var app = express();
var http = require('http').Server(app);

app.use(compression()); //COMPRIME TODAS LAS PETICIONES

var config = require('./config.js'); //ARCHIVO DE CONFIGURACION GENERICO

var port = process.env.PORT || 3000;

//DEFINE LA CARPETA DESDE LA CUAL SE SIRVEN ARCHIVOS ESTATICOS (CSS, JS, IMGS, etc...)
var static = express();
app.use('/static', static);
static.use(express.static('public')); 

//DEFINIMOS LAS SUBRUTAS ALTERNATIVAS
var rest = express();  //API REST
app.use('/rest', rest);

//CARGAMOS LAS RUTAS FIJAS
require('./routes/rest/users.js')(express, rest);

//LA RUTA / SIRVE PARA ANGULARJS, TODAS LAS RUTAS DE ANGULAR SE DEFINEN EN public/app/app.js LAS ALTERNATIVAS SE DEFINEN ARRIBA
app.get('/*',function(req, res){
 res.sendFile('index.html', { root: __dirname+"/public" });
});


//INICIAMOS EL SERVIDOR
http.listen(port, function(){
  console.log('listening on *:'+port);
});