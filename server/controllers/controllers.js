var models = require('../models/models');
var url = require('url');
var request = require('request');
var fs = require('fs');

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

        //console.log('in controller, data received to be sent back ', JSON.stringify(data));
        if(error) {
          console.log('error sent back from controller', error);
          response.status(404)
          .append('Access-Control-Allow-Origin', '*')
          .json(error);
        } else {
          console.log('in controller sending URL back', JSON.stringify(data));
          response.status(200)
          .append('Access-Control-Allow-Origin', '*')
          .send(JSON.stringify(data));
          
        }
      });
    }

  },

  bing:{

    get: function(req, response) {

      var headers = {
    'Ocp-Apim-Subscription-Key': '3417bc622a2c4948b422bfc3cbcf5972 ',
    'User-Agent': 'request'
      };

      var options = {
        url: 'https://api.cognitive.microsoft.com/bing/v5.0/images/search',
        method: 'GET',
        headers: headers,
        qs: {'q':'fish', 'count': '5' }
      }

      request(options, function(error, response,body){

        if(!error) {
          console.log('response received from Bing by server');
          //console.log(response);
          console.log('-----------');
          //console.log(body);
          //console.log(JSON.parse(body));

          var JSONbod = JSON.parse(body);
          //for(var key in JSONbod) console.log('key --->', key);
          console.log(JSONbod['value'][0]);
         
          models.bing.get(options.qs['q'], JSONbod['value'], function(error, data){
            if(!error) {
              console.log('data written to database and back in controller');
            }
          });
        }
      });

    } // end of bing get function

  },

  image: {

    get: function(request, response) {
      console.log('|||||| Controller for get image');

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