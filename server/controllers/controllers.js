var models = require('../models/models');
var url = require('url');

module.exports = {

  home: {

    get: function(request, response) {

    }

  },

  category: {

    get: function(request, response) {

      //get querystring and assign to variable category

      var queryPath = url.parse(request.url, true).query;
      console.log('queryPath' ,queryPath);
     

      models.category.get(queryPath.category, function(error, data){

        console.log('in controller, data received to be sent back ', JSON.stringify(data));
        if(error) {
          console.log('error sent back from controller', error);
          response.status(404)
          .append('Access-Control-Allow-Origin', '*')
          .json(error);
        } else {
          response.status(200)
          .append('Access-Control-Allow-Origin', '*')
          .send(JSON.stringify(data));
        }
      });
    }

  },

  image: {

    get: function(request, response) {

      var queryPath = url.parse(request.url, true).query;
      models.image.get(queryPath.title, function(error, data){
        if(error) {
          response.status(404)
          .append('Access-Control-Allow-Origin', '*')
          .json(error);
        } else {
          response.status(200)
          .append('Access-Control-Allow-Origin', '*')
          .send(JSON.stringify(data));
        }

      });


    }

  }
  
};