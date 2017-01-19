var express = require ('express');
var router = express.Router();
var db = require ('./queries') // file structure may change

var app = express()


console.log('db', db)
// get all books
router.get('/api/books', db.getAllBooks);

// get single book
router.get('/api/books/:id', db.getSingleBook);

app.use(router)

app.listen(3000, function() {
  console.log('the server is running!')
})

module.exports= router;
