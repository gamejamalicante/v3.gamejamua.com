var mysql = require('mysql'); //CARGAMOS MYSQL

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'root',
  database : 'excursionismo'
});

connection.connect(function(err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }

  console.log('connected as id ' + connection.threadId);
});

connection.end();

module.exports = {
	mysql_connection : connection
}

