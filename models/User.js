const mongoose = require('mongoose');
const { Schema } = mongoose;

// const activitySchema = new Schema({
//   activityName: String
// });

const bookSchema = new Schema({
  bookName: {type: String},
  description: {type: String},
  status: {type: String},
  genre: {type: String},
  isFiction: {type: Boolean},
  // favoriteActivities data type is an array of activitySchema
  // favoriteActivities: [activitySchema]
});

const userSchema = new Schema ({
  name: {type: String},
  email: {type: String},
  books: [bookSchema
  ]
});

const User = mongoose.model('User', userSchema);
const Book = mongoose.model('Book', bookSchema);


// make a model out of the schema
//  export the model


module.exports = {User, Book};
