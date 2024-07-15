// app.js

/*-------Required Imports--------------------------------------------------------*/
const express = require("express");
const cors = require("cors");
const sequelize = require("./util/databaseConnect");
const Author = require("./models/authors");
const Genre = require("./models/genres");
const Book = require("./models/books");

/*--------------------------------------------------------------------------*/
const app = express();
const PORT = require("./config");

app.use(express.json());
app.use(cors());

/*--------------------------------------------------------------------------*/
// Defining Associations

Book.belongsTo(Genre, { foreignKey: "genreId" });
Genre.hasMany(Book, {
  foreignKey: "genreId",
  onDelete: "RESTRICT",
});

Book.belongsTo(Author, { foreignKey: "authorId" });
Author.hasMany(Book, {
  foreignKey: "authorId",
  onDelete: "RESTRICT",
});

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

// /*----- Import routes-------------------------------------------------------*/

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
  res.send("Welcome to the Express-Sequelize new demo!");
});

// Server listening
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// /*--------------------------------------------------------------------------*/
