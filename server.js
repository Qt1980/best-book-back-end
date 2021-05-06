'use strict'; 
const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');

// make sure our app can handle post requests
// specifically, make sure that on post requests, we can access the data in the request body
app.use(express.json());

// const user = require('user');

// const PORT = process.env.PORT || 3001;

require('dotenv').config();

// Cors
app.use(cors());

// hey mongoose, connect to the database at localhost:27017
mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true });
// mongoose.connect('mongodb://localhost:27017/books', {useNewUrlParser: true, useUnifiedTopology: true});
// const db = mongoose.connection

// I'm intentioanlly requiring this model After I run mongoose.connect
const User = require('./models/User');
const Books = require('./models/Books');
const { request, response } = require('express');
const { db } = require('./models/User');

db.on('error', (error) => console.error(error))
db.once('open', () => console.log('Connected to Database'))
// see the database with some books, so I can retrieve them

// const newUser = new User({
//   name: 'Qadree Trimblr',
//   email: 'qbt007@gmail.com',
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
//   email: 'kevinhenry789@gmail.com',
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

// app.get('/User', (req, res) => {
//   res.send('name');
// });

app.get('/', (req, res) => {
  User.find((err, userData) => {
    res.send(userData);
  });
});

// colon at the start of :email makes it a parameter
app.get('/user/:email', (req, res) => {
// app.get('/user/:email', (req, res) => {
  User.find({email: req.params.email}, (err, userData) => {
    res.send(userData);
  });
});

app.post('/books', (req, res) => {
  // for post requests, data is inside of the body
  // as long as we have the app.use(express.json()) line at the top of the file

  // console.log('book', req.query.user);
  console.log(req.body);
  // let user = req.query.user;
  // get all the books from the database
  // Book.find((err, databaseResults) => {

   // find the relevant user in the database
  User.find({email: req.body.email}, (err, userData) => {
    if(userData.length < 1) {
      res.status(400).send('user does not exist in database');
    } else {
      // add the new book info to that user
      let user = userData[0];
      user.books.push({
      // user.favoriteBooks.push({
        bookName: req.body.name,
        bookDescription: req.body.description,
        bookStatus: req.body.status
      });
      // save the user
      user.save().then( (userData) => {
        console.log(userData);
        res.send(userData.books);
      })
        .catch(err => {
        res.status(500).send(err);
      });
    }
  });
});

// best practice: use body for non-GET requests
//     use query for GET requests

//              this :id thing is req.params
app.put('/books/:id', (req, res) => {
  // find the user
  let email = req.body.user;
  Users.find({email: email}, (err, userData) => {
    // update the book
    let bookId = req.params.id;
    let user = userData[0];
    user.books.forEach(book => {
      if(`${book._id}` === bookId) {
        // we found the correct book! update it
        book.bookName = req.body.name;
        book.bookDescription = req.body.description;
      }
    });
    // save the updated user/book
    user.save().then(savedUserData => {
      // send back the new data
      res.send(savedUserData.books);
    });
  });
});

app.delete('/books/:id', (req, res) => {
  let email = req.query.user;
  console.log(req.query);
  console.log('email', email)
  // find the user
  User.find({email: email}, (err, userData) => {
  // User.findOne({email: email}, (err, userData) => {
    let user = userData[0];
    // let user = userData;
    console.log('user', user);
    // delete the book
    user.books = user.books.filter(book => `${book._id}` !== req.params.id);
    // save the user
    console.log(user.books);
    user.save().then(userData => {
      res.send(userData.books);
    });
  });
});

  // send them in my response
    // res.send(databaseResults[0].favoriteBooks);
    // res.send(databaseResults);
// route to get just one user from db
// app.get('/user', (req, res) => {
//   User.find({ name: req.query.name }, (err, databaseResults) => {
    // sent them in my response
//     res.send(databaseResults);
//   });
// });

app.listen(3001, () => console.log('app listening on 3001'));
