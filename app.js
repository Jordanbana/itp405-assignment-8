var express = require('express')
var app = express()
var Reviews = require('./models/reviews')
var Books = require('./models/books')
var bodyParser = require('body-parser')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//Get
app.get('/api/v1/reviews', function(request,response){
    Reviews.fetchAll().then(function(reviews){
        response.json(reviews);
    })
});

app.get('/api/v1/books/:id', function(request,response){
    Books
      .where('id', request.params.id)
      .fetch({ require:true })
      .then(function(book){
        response.json(book);
    },function(){
        response.json({
          error: 'Book cannot be found.'
        });
    });
});

//Post
app.post('/api/v1/reviews', function(request,response){
    var review = new Reviews({
        // book_id: 10000,
        book_id: request.body.book_id,
        // headline: 'OMG',
        headline: request.body.headline,
        // body: 'SOOOOO Good',
        body: request.body.body,
        // rating: 5
        rating: request.body.rating
    });

    review.save().then(function(){
        response.json(review);
    });
});


app.listen(8000);
