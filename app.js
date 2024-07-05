// app.js

/*-------Required Imports--------------------------------------------------------*/
const express = require("express");
const sequelize = require("./util/databaseConnect");
const Author = require("./models/authors");
const Genre = require("./models/genres");
const Book = require("./models/books");

/*--------------------------------------------------------------------------*/
const app = express();
const PORT = require("./config");

app.use(express.json());

/*--------------------------------------------------------------------------*/
// Defining Associations

Book.belongsTo(Genre);
Genre.hasMany(Book);

Book.belongsTo(Author);
Author.hasMany(Book);

/*--------------------------------------------------------------------------*/
// Syncing models

sequelize
  //.sync({ force: true })
  .sync()
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.log(err);
  });

// const Author = AuthorModel(sequelize);
// const Genre = GenreModel(sequelize);
// const Book = BookModel(sequelize);

//Sync models - syncing them seperately because it is promise based
// async function syncAuthor() {
//   //author model sync
//   try {
//     await Author.sync();
//     console.log("Author synchronized successfully.");
//   } catch (error) {
//     console.error("Error synchronizing Author model:", error);
//   }
//   // genre model sync
//   try {
//     await Genre.sync();
//     console.log("Genre synchronized successfully.");
//   } catch (error) {
//     console.error("Error synchronizing Genre model:", error);
//   }
// }

// syncAuthor();
// // //book model sync

// // async function syncBook() {
// //   try {
// //     await Book.sync();
// //     console.log("Book Model synchronized successfully.");
// //   } catch (error) {
// //     console.error("Error synchronizing Book model:", error);
// //   }
// // }

// // syncBook();
// setTimeout(() => {
//   Book.sync()
//     .then(() => {
//       console.log("Book Model synchronized successfully.");
//     })
//     .catch((err) => {
//       console.error("Error synchronizing Book model:", err);
//     });
// }, 3000);

// /*--------------------------------------------------------------------------*/
// // fetch is giving issues in table creation with foreign keys (parent not found)
// // Author.sync()
// //   .then(() => {
// //     console.log("Author synchronized successfully.");
// //   })
// //   .catch((err) => {
// //     console.error("Error synchronizing Author model:", err);
// //   });

// // Genre.sync()
// //   .then(() => {
// //     console.log("Genre synchronized successfully.");
// //   })
// //   .catch((err) => {
// //     console.error("Error synchronizing Genre model:", err);
// //   });

// // Book.sync()
// //   .then(() => {
// //     console.log("Book Model synchronized successfully.");
// //   })
// //   .catch((err) => {
// //     console.error("Error synchronizing Book model:", err);
// //   });

// /*----- Import routes-------------------------------------------------------*/
// //const routes = require("./routes");
// //app.use("/api", routes);

// Import routes
// Routes for Author
const authorRoutes = require("./routes/authorRoute");
app.use("/authors", authorRoutes);

// Routes for Genre
const genreRoutes = require("./routes/genreRoute");
app.use("/genres", genreRoutes);

// Routes for Book
const bookRoutes = require("./routes/booksRoute");
app.use("/books", bookRoutes);

//HomePage
app.get("/", (req, res) => {
  res.send("Welcome to the Express-Sequelize demo!");
});

// Server listening
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// /*--------------------------------------------------------------------------*/
