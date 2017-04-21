var React = require('react');
var ReactDOM = require('react-dom');
var App = require('./components/app').App;

$.get('/api/category?category=dog', function(data){
    ReactDOM.render(<App imageList={JSON.parse(data)}/>, document.getElementById('main'));
});