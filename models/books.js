// models/book.js
const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../util/databaseConnect");
const Genre = require("./genres");
const Author = require("./authors");

const Books = sequelize.define("Books", {
  bookId: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  price: {
    type: DataTypes.DECIMAL,
    allowNull: false,
  },
  publicationDate: {
    type: DataTypes.DATEONLY,
    allowNull: false,
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
