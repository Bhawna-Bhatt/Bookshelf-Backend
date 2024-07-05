// models/author.js
const { DataTypes } = require("sequelize");
const sequelize = require("../util/databaseConnect");

const Author = sequelize.define("Authors", {
  authorId: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  biography: {
    type: DataTypes.TEXT,
  },
});

module.exports = Author;
