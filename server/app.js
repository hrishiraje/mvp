var cors = require('cors');
var express = require('express');
var parser = require('body-parser');
var cookieParser = require('cookie-parser');
var partials = require('express-partials');
var routes = require('./routers/routes');
var path = require('path');

var app = express();
app.set('port', 1313);

app.use(cors());
app.use(parser.json());
app.use(parser.urlencoded({extended: true}));
app.use(cookieParser());
app.use(partials());

app.use(routes);

app.use(express.static(path.join(__dirname, '../public')));

if(!module.parent) {
  app.listen(app.get('port'));
  console.log('Server listening on port '+app.get(port));
}

module.exports.app = app;