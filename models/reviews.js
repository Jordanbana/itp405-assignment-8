var bookshelf = require('./../bookshelf')

var Reviews = bookshelf.Model.extend({
  tableName: 'reviews'
});

module.exports = Reviews;
