'use strit';

const User = require("./models/User");

1. in user.js create userSchema with mongoose.schema
const userSchema = new mongoose.Schema({
 name: {type: String};
 description: {type: String}
});

1. inside server.js create new user construtor

creates new users
 const myUser = new User({
   email: 'qbt007@gmail.com'
    });

create app.get route and parameter method
app.get('user/:email', (req, res) => {
 User.find({email: require.params.email},
  (err, userData) => {
    resizeBy.send(userData);
 });
});

1. to create new users for to be stored in the database we need to use app.post on the front end.

axios.post(`http://localhost:3001/users`, {
  name: this.state.name,
  email: this.state.email,
}).then(response => console.log(response.data));
