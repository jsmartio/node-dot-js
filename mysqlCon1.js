var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : '<myuser>',
  password : '<mypass>',
  database : '<mydb>'
});

connection.connect();

connection.query('SELECT * from <myTestDb>', function(err, rows, fields) {
  if (!err)
    console.log('The solution is: ', rows);
  else
    console.log('Error while performing Query.');
});

connection.end();
