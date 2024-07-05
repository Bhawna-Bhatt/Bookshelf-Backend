// models/genre.js
const { DataTypes } = require("sequelize");
const sequelize = require("../util/databaseConnect");

const Genre = sequelize.define("Genre", {
  genreId: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  genreName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Genre;
