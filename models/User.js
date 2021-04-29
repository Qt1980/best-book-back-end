const mongoose = require('mongoose');
const { Schema } = mongoose;

// const activitySchema = new Schema({
//   activityName: String
// });

const bookSchema = new Schema({
  name: String,
  description: String,
  status: String,
  genre: String,
  isFiction: Boolean,
  // favoriteActivities data type is an array of activitySchema
  // favoriteActivities: [activitySchema]
});

const userSchema = new Schema ({
  name: String,
  email: String,
  books: [bookSchema
  ]
});

const User = mongoose.model('User', userSchema);



// make a model out of the schema
//  export the model


module.exports = User;
