const mongoose = require('mongoose');
const { Schema } = mongoose;

// const activitySchema = new Schema({
//   activityName: String
// });

const bookSchema = new Schema({
  name: String,
  genre: String,
  isFiction: Boolean,
  // favoriteActivities data type is an array of activitySchema
  // favoriteActivities: [activitySchema]
});
// make a model out of the schema
const Book = mongoose.model('Book', bookSchema);
//  export the model
module.exports = Book;
