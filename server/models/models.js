var connection = require('../db/connect').connection;

module.exports = {

  home: {

    get: function(cb) {

    }

  },

  category: {

    get: function(category, cb) {
      console.log('category in model ', category);
      connection.query('select title from images where category = ?', category, function(error, rows, fields){

        console.log('DB query results error', error);
        console.log('DB query data', rows);
        if(error) {
          cb(error, null);
        } else cb(null, rows);

      });

    }

  }, 

  image: {

    get: function(title, cb) {

      connection.query('select url from images where title = ?', title, function(error, rows, data){
        if(error) {
          cb(error, null);
        } else cb(null, rows);
      });

    }

  }

};