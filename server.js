const express = require('express');
const app = express();
const mongoose = require('mongoose');

require('dotenv').config();

// hey mongoose, connect to the database at localhost:27017
mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true });

// I'm intentioanlly requiring this model After I run mongoose.connect
const Book = require('./models/Book');

// see the database with some books, so I can retrieve them
const myBook = new Book({
  name: 'Bram Stokers Dracula',
  genre: 'Horror',
  isFiction: true,
  // favoriteActivities: [
  //     { activityName: 'playing with a ball of yarn' },
  //     { activityName: 'sleeping' },
  //     { activityName: 'zoomies' },
  // ]
});

// myBook.save(function (err) {
//   if (err) console.err(err);
//   else console.log('saved the book');
// });

app.get('/', (req, res) => {
  res.send('My booklist!');
});

app.get('/books', (req, res) => {
  // get all the cats from the database
  Book.find((err, databaseResults) => {
  // send them in my response
    res.send(databaseResults);
  });
});
// route to get just one cat
app.get('/book', (req, res) => {
  Book.find({ name: req.query.name }, (err, databaseResults) => {
    // sent them in my response
    res.send(databaseResults);
  });
});

app.listen(3001, () => console.log('app listening on 3001'));