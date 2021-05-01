'use strict';
const mongoose = require('mongoose');

// schema is like a constructor
// defining properties & their data types
const bookSchema = new mongoose.Schema({
  bookName: {type: String},
  bookDescription: {type: String},
  bookStatus: {type: Boolean},
});

module.exports = mongoose.model('Books');
