const { Sequelize } = require("sequelize");

// setting up  Sequelize connection pool
const sequelize = new Sequelize("bookstore", "root", "Ldbb@133385", {
  host: "localhost",
  dialect: "mysql",
  logging: (...msg) => console.log(msg),
});

// Test the connection
sequelize
  .authenticate()
  .then(() => {
    console.log(
      "Connection to Bookstore Database has been established successfully."
    );
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
  });

/*--------------------------------------------------------------------------*/

module.exports = sequelize;
