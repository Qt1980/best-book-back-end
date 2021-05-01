const mongoose = require('mongoose');
const { Schema } = mongoose;

// const activitySchema = new Schema({
//   activityName: String
// });

// schema is like a constructor
// defining properties & their data types
const bookSchema = new Schema({
  bookName: {type: String},
  bookDescription: {type: String},
  bookStatus: {type: Boolean},
  // genre: {type: String},
  // isFiction: {type: Boolean},
  // favoriteActivities data type is an array of activitySchema
  // favoriteActivities: [activitySchema]
});

// userSchema includes our bookSchema
// user is an object that contains an array of book objects
const userSchema = new Schema ({
  // userName: {type: String},
  userEmail: {type: String},
  favoriteBooks: [bookSchema],
});

const User = mongoose.model('User', userSchema);
// const Book = mongoose.model('Book', bookSchema);


// make a model out of the schema
//  export the model

module.exports = User;
// module.exports = {User, Book};
