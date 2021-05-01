'use strict'; 
const express = require('express');
const app = express();
const mongoose = require('mongoose');
// const user = require('user');

require('dotenv').config();

// hey mongoose, connect to the database at localhost:27017
mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true });

// I'm intentioanlly requiring this model After I run mongoose.connect
const User = require('./models/User');

// see the database with some books, so I can retrieve them
const newUser = new User({
  name: 'Qadree Trimblr',
  email: 'qbt007@gmail.com',
  books: [{
    name:`Bram Stoker's Dracula`,
    description:`A Story of Lovers`,
    status: `Read`,
    genre: `Horror`,
    isFiction: true
  }]
});

// newUser.save().then(() => console.log('user saved'));
// myBook.save(function (err) {
//   if (err) console.err(err);
//   else console.log('saved the book');
// });


app.get('/User', (req, res) => {
  res.send('name', 'email');
});

app.get('/', (req, res) => {
  res.send('My booklist!');
});

app.get('/books', (req, res) => {
  // get all the cats from the database
  newUser.find((err, databaseResults) => {
  // send them in my response
    res.send(databaseResults);
  });
});
// route to get just one cat
app.get('/book', (req, res) => {
  newUser.find({ name: req.query.name }, (err, databaseResults) => {
    // sent them in my response
    res.send(databaseResults);
  });
});

app.listen(3001, () => console.log('app listening on 3001'));
