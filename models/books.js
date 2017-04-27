var bookshelf = require('./../bookshelf')

var Books = bookshelf.Model.extend({
  tableName: 'books'
});

module.exports = Books;
