require("dotenv").config();
const Sequelize = require("sequelize");

let HOST = process.env.HOST;
let DIALECT = "mysql";

// if (process.env.NODE_ENV === "test") {
// HOST = "localhost";
// DIALECT = "mariadb";
// }

const sequelize = new Sequelize("baseballstats", "zach", process.env.PASSWORD, {
  host: HOST,
  dialect: DIALECT,

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
});

module.exports = sequelize;
