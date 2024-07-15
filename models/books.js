// models/book.js
const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../util/databaseConnect");
const Genre = require("./genres");
const Author = require("./authors");

const Books = sequelize.define("Books", {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },

  price: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
  },
  publicationDate: {
    type: DataTypes.DATEONLY,
    allowNull: false,
  },
  authorId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Author,
      key: "id",
    },
  },
  genreId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Genre,
      key: "id",
    },
  },
});

/*--------------------------------------------------------------------------*/
// Associations

// Genre.hasMany(Book);
// Book.belongsTo(Genre);

// Author.hasMany(Book);
// Book.belongsTo(Author);
// console.log("association done");

/*---------------------------------------------------------------------------*/
module.exports = Books;
