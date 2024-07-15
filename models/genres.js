// models/genre.js
const { DataTypes } = require("sequelize");
const sequelize = require("../util/databaseConnect");

const Genre = sequelize.define("Genre", {
  genreName: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
});

module.exports = Genre;
