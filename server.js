'use strict'; 
const express = require('express');
const app = express();
const mongoose = require('mongoose');
// const user = require('user');

require('dotenv').config();

// hey mongoose, connect to the database at localhost:27017
mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true });

// I'm intentioanlly requiring this model After I run mongoose.connect
const {User, Book} = require('./models/User');

// see the database with some books, so I can retrieve them
const newUser = new User({
  name: 'Mark Cuban',
  email: 'mcuban@pooperscoop.com',
  books: [{
    bookName:`I'm Rich Get Over It!`,
    description:`How to get rich by a billionaire`,
    status: `Read, Not!`,
    genre: `Horror`,
    isFiction: true
  }]
});

const myBook = new Book({bookName: 'Fight Club', description: 'awesom', status: 'read', genre: 'wellness', isFiction: true});



myBook.save(function (err) {
  if (err) console.err(err);
  else console.log('saved the book');
});

newUser.save(function (err) {
  if (err) console.err(err);
  else console.log('user saved');
});


// app.get('/User', (req, res) => {
//   res.send('name', 'email');
// });

app.get('/', (req, res) => {
  res.send('My booklist!');
});

app.get('/book', (req, res) => {
  // get all the cats from the database
  Book.find((err, databaseResults) => {
  // send them in my response
    res.send(databaseResults);
  });
});
// route to get just one cat
app.get('/user', (req, res) => {
  User.find({ name: req.query.name }, (err, databaseResults) => {
    // sent them in my response
    res.send(databaseResults);
  });
});

app.listen(3001, () => console.log('app listening on 3001'));
