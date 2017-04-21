var connection = require('../db/connect').connection;

module.exports = {

  home: {

    get: function(cb) {

    }

  },

  category: {

    get: function(category, cb) {

      connection.query('select title from images where category = ?', category, function(error, rows, fields){
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