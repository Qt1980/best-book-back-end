# Best Books Review

Deployed Site: https://thirsty-cori-1a773a.netlify.app/


## Your Notes from Yesterday
`'use strit';`

`const User = require("./models/User");`

1. in `user.js` create `userSchema` with mongoose.schema
```
const userSchema = new mongoose.Schema({
 name: {type: String};
 description: {type: String}
});
```

1. inside `server.js` create new user construtor
```
creates new users
 const myUser = new User({
   email: 'qbt007@gmail.com'
    });
```
create `app.get` route and parameter method
```
app.get('user/:email', (req, res) => {
 User.find({email: require.params.email},
  (err, userData) => {
    resizeBy.send(userData);
 });
});
```
1. to create new users for to be stored in the database we need to use `app.post` on the front end.
```
axios.post(`http://localhost:3001/users`, {
  name: this.state.name,
  email: this.state.email,
}).then(response => console.log(response.data));
```
----

So at the stopping point last night:
## Status:
- Server is stable and displaying console logs of New Books! entries.
- My Favorite Books is displaying a collection of favorite books in Bootstrap Carousel. - This is currently using placeholder images.
- Log Out button has been moved to the Heading as per the cards. It will only display if a user is signed in and authenticated.
- Login is displayed up in the header area if a user is not signed in and authenticated.
- New Books! is at the bottom of the screen, beneeth the Carousel.
- Dev Console is show Auth0 status.
- BestBooks.js is receiving User info from Auth0.
- BestBooks.js is receiving User and Book info from the Backend/MongoDB and reporting with Console.Log 'found it'.
- BookForm.js is receiving user info and book info from the Backend/MongoDB.
- Delete Button will appear after you add a new book to your list via BookForm.js. They do accumilate as you add more entires; however, they are displaying the books as a dot, instead of the title as intended...
- Added minor error .catch in Server.js.


## Errors:
- Receiving a StrictMode warning. - Ignore?
- When entering new info through New Books!, POST reports a 400 (Bad Request) error in BookForm.js.
- Seeing an Uncaught (in promise) error.


## To Do:
- Change the @ Best Books at the bottom of the page to have our names.
- ? Change the size of the placeholder image?
- Change the background color. I think I tossed in the baige, but it would be good if we had a color that worked better with the Jumbotron background color and I suppose the purple of your profile photo.
- ? Remove the email address input line in New Books!?
- ?Change the Header Title from My Favorite Books to Best Books?
- Give some love to fonts and spacing on Header.
- Change the text displayed next to the Delete button to show the title of the book.

# How Does Best Books Work?
## The Backend

### Server.js
- Provisions the server.
  - Connects to our MongoDB via Mongoose.
  - Listens to PORT 3001 and Stands by for requests from the Front End. 

- Houses Constructors for User and Book via their respective Models.
- App GET, POST handle requests to various endpoints and send responses.
- App Delete will delete a book by it's id.
- Finds the User and User Books in the Body of MongoFB.
- New hotness is that we using `app.use(express.json());` to work POST requests.

### User.js
- Houses the Schema for books - bookSchema.
- Houses the Schema for users - userSchema.
- Schemas are just constructors defining properties and their data types.
- Exports User.


### Books.js
- ? I'm wondering if we have a redundancy with the bookSchema?
- Houses the Schema for a newPerson.
- Exports Books and newPerson.


### .env
- Never forget the .env!
- Sets our DATABASE_URL to `MongoDB://localhost:27017/books`.

### package.json
- Lays of the organization of the app and outlines dependencies.


## The Frontend

### App.js
- Imports all the bits and pieces.
- Lays out how the app will be rendered.
- Exports App.

### Index.js
- I think of this as the home for the app.
- In this case we're setting our Auth0 info.

### Profile.js
- The User profile.
- Displays the User card with the info we want.

### MyFavoriteBooks.js
- Creates a jumbotron where we will display the book info from BestBooks.js.

### BestBooks.js
- Creates a Carousel of the user's favorite books.
- Call for bookData from the BackEnd/DataBase.

### BookForm.js
- Create input boxes to add books to each user's list.
- Enables a user to delete books one by one on their list.

### Login.js
- Create the login box when no user is signed in/authenticated.

### LoginButton.js
- How the Log In button behaves.

### LogoutButton.js
- How the Log Out button behaves.

### isLoadingAndError.js
- Displays info in while loading or an error.

### Header.js
- Displays the Log In or Log Out button.

### Footer.js
- Displays our brand and copyright info.

### package.json
- Lays of the organization of the app and outlines dependencies.
