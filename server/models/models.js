var connection = require('../db/connect').connection;
var request = require('request');

module.exports = {

  home: {

    get: function(cb) {

    }

  },

  category: {

    get: function(category, cb) {

      var finalResult = [];
      // console.log('category in model ', category);
      // connection.query('select title from images where category = ?', category, function(error, rows, fields){

      //   console.log('DB query results error', error);
      //   console.log('DB query data', rows);
       
      //   if(error) {
      //     cb(error, null);
      //   } else cb(null, rows);

      // }); 

      //-------refactor to include Bing------------//

      connection.query('select title from images where category = ?', category, function(error, rows, fields){
        if(error) {
          console.log('calling cb from line 35 in model for error', error);
          cb(error, null);
        } else {
          console.log('length of rows ', rows.length);
          if(rows.length !== 0) {
            // finalResult = rows;
            // console.log('finalResult', JSON.stringify(finalResult));
            console.log('calling cb from line 42 in model for data', JSON.stringify(rows));
            cb(null, rows);
          } else {

            //make a request to Bing to get back 5 images

          var headers = {
          'Ocp-Apim-Subscription-Key': '3417bc622a2c4948b422bfc3cbcf5972 ',
          'User-Agent': 'request'
          };

           var options = {
           url: 'https://api.cognitive.microsoft.com/bing/v5.0/images/search',
           method: 'GET',
           headers: headers,
           qs: {'q':category, 'count': '5' }
        };

        //Make the actual request to Bing - 

        request(options, function(error, response,body){
          if(!error) {
          var JSONbod = JSON.parse(body);     
          // models.bing.get(options.qs['q'], JSONbod['value'], function(error, data){
          //   if(!error) {
          //     console.log('data written to database and back in controller');
          //   }
          // });
          var items = JSONbod['value'];
          console.log('results from searching Bing ', items);
          for(var i = 0; i < items.length; i++) {
             var imageTuple = {title: items[i].name, category: category, url: items[i].contentUrl};
             connection.query('insert into images set ?', imageTuple, function(error, rows, fields){
               if(!error) {
                 console.log('element inserted into DB');
                 //console.log('after inserting a tuple in the DB ', rows);
  

                 // read the rows just inserted in the DB and return to the client 
                //  connection.query('select title from images where category = ?', category, function(error, rows, fiels){
                //    if(!error) {
                //     //  finalResult = rows;
                //     console.log('calling cb from line 79 in model for data', JSON.stringify(rows));
                //     // cb(null, rows);
                //     // finalResult.push(rows);
                //      //console.log('finalResult', JSON.stringify(finalResult));


                //    }
                //  });
               }
             });
          } 

          connection.query('select title from images where category = ?', category, function(error, rows, fields){
            if(!error) {
              console.log('rows from DB+Bing to controller ', JSON.stringify(rows));
              cb(null, rows);
            }

          });



          console.log('finalResult ',JSON.stringify(finalResult));
        }
      });
          }
        }
      });

      // cb(null, finalResult);
    }
  }, 

  bing: {
    
    get: function(category, items, cb) {

      console.log('category received by bing model ', category);
      //insert BING results into DB - 5 of them 
      for(var i = 0; i < items.length; i++) {
        //connection.query('insert into images (')
        var imageTuple = {title: items[i].name, category: category, url: items[i].contentUrl};
        connection.query('insert into images set ?', imageTuple, function(error, rows, data){
          console.log('in the DB insert callback with error ',error);
          console.log('in the DB insert callback with data', rows);
          //if(!error) cb(null, 'I wrote to the DB');
        })
      }
    }

  },

  image: {

    get: function(title, cb) {
      console.log('asked to retrieve URL for ', title);
      connection.query('select url from images where title = ?', title, function(error, rows, data){
        if(error) {
          console.log('error in DB ===', error);
          cb(error, null);
        } else{ 
          console.log('found results to send back ===')
          console.log('in model, DB result to send back ', JSON.stringify(rows));
          cb(null, rows);}
      });

    }

  }

};