const Sequelize = require("sequelize");

const sequelize = new Sequelize("baseballapi", "zach", process.env.PASSWORD, {
  host: "localhost",
  dialect: "mysql"
});

module.exports = sequelize;
