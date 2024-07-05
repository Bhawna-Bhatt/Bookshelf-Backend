/*---------------------------------------------------------------------------*/
//bulkcreate - initial table load
const Genre = require("../models/genres");
//const Author = require("../models/authors");
//const Book = require("../book");

const genreData = require("./seedData/Genresdata");
//const authorData = require("./seedData/Authorsdata");
const bookData = require("./seedData/Booksdata");

const genreDataCreated = Genre.bulkCreate(genreData);
//const authorDataCreated = Author.bulkCreate(authorData);
//const bookDataCreated = Book.bulkCreate(bookData);
