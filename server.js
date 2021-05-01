'use strict'; 
const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
// const user = require('user');

// const PORT = process.env.PORT || 3001;

require('dotenv').config();

// hey mongoose, connect to the database at localhost:27017
mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true });

// I'm intentioanlly requiring this model After I run mongoose.connect
const User = require('./models/User');



// see the database with some books, so I can retrieve them

// const newUser = new User({
//   name: 'Qadree Trimblr',
//   userEmail: 'qbt007@gmail.com',
//   favoriteBooks: [{
//     bookName:`Bram Stoker's Dracula`,
//     description:`A Story of Lovers`,
//     status: `Read`,
//     genre: `Horror`,
//     isFiction: true
//   }]
// });

// newUser.save().then(() => console.log('user saved'));

// const myUser = new User({
//   // userName: 'Kevin',
//   userEmail: 'kevinhenry789@gmail.com',
//   favoriteBooks: [{ bookName: 'I\'m Rich Get Over It!'}, {bookName: 'Fight Club'}, {bookName: 'Blackhawk Down'}, {bookName: 'Extreme Ownership'}],
// });


// const myBook = new Book({bookName: 'Fight Club', description: 'awesom', status: 'read', genre: 'wellness', isFiction: true});

// myBook.save(function (err) {
//   if (err) console.err(err);
//   else console.log('saved the book');
// });

// myUser.save(function (err) {
//   if (err) console.err(err);
//   else console.log('user saved');
// });

// Cors
app.use(cors());

// app.get('/User', (req, res) => {
//   res.send('name');
// });

app.get('/', (req, res) => {
  res.send('My booklist!');
});

app.get('/book', (req, res) => {
  console.log('book', req.query.user);
  let user = req.query.user;
  // get all the books from the database
  // Book.find((err, databaseResults) => {
  User.find({userEmail: user}, (err, databaseResults) => {
  // User.find({userEmail: user}, (err, databaseResults) => {
  // send them in my response
    res.send(databaseResults[0].favoriteBooks);
    // res.send(databaseResults);
  });
});
// route to get just one user from db
// app.get('/user', (req, res) => {
//   User.find({ name: req.query.name }, (err, databaseResults) => {
    // sent them in my response
//     res.send(databaseResults);
//   });
// });

app.listen(3001, () => console.log('app listening on 3001'));
