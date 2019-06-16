const Sequelize = require("sequelize");

const sequelize = new Sequelize("baseballstats", "zach", process.env.PASSWORD, {
  host: "baseballapi.cil0vkufrc31.us-east-1.rds.amazonaws.com",
  dialect: "mysql",

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
});

module.exports = sequelize;
