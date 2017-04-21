var models = require('../models/models');
var url = require('url');

module.exports = {

  home: {

    get: function(request, response) {

       response.status(200)
       .append('Access-Control-Allow-origin', '*')
       .send('Hello from the server');

    }

  },

  category: {

    get: function(request, response) {

    }

  },

  image: {

    get: function(request, response) {

    }

  }

};