var db = require('mysql');

var connection = db.createConnection({
  host: 'localhost',
  username: 'root',
  password: '',
  database: 'imagerepo'
});

connection.connect();

module.exports.connection = connection;

