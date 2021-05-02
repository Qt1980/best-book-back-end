'use strict';
const mongoose = require('mongoose');

// schema is like a constructor
// defining properties & their data types
const bookSchema = new mongoose.Schema({
  bookName: {type: String},
  bookDescription: {type: String},
  bookStatus: {type: Boolean},
});

const newPerson = new mongoose.Schema({
  email: {type: String, required: true},
  books: [bookSchema]
});

module.exports = mongoose.model('Books', newPerson);
