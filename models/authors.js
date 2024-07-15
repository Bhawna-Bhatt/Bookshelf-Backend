// models/author.js
const { DataTypes } = require("sequelize");
const sequelize = require("../util/databaseConnect");

const Author = sequelize.define("Authors", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  biography: {
    type: DataTypes.TEXT,
  },
});

module.exports = Author;
