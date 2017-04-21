var db = require('mysql');

var connection = db.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: '',
  database: 'imagerepo'
});

connection.connect();

module.exports.connection = connection;

