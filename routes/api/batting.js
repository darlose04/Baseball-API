const batterRouter = require("express").Router();
const AllBatters = require("../../models/AllBatters");
const Sequelize = require("sequelize");
const Op = Sequelize.Op;

// get all batters from the table
batterRouter.get("/", (req, res) => {
  AllBatters.findAll({
    order: [["team", "ASC"]]
  }).then(batters => res.json(batters));
});

// get individual player stats from every year
batterRouter.get("/players/:name", (req, res) => {
  AllBatters.findAll({
    where: {
      name: req.params.name
    }
  }).then(batter => res.json(batter));
});

// get batters by year
batterRouter.get("/:year", (req, res) => {
  AllBatters.findAll({
    where: {
      year: req.params.year
    },
    order: [["war", "DESC"]]
  }).then(batters => res.json(batters));
});

// get individual batter by year
batterRouter.get("/:year/players/:name", (req, res) => {
  AllBatters.findOne({
    where: {
      year: req.params.year,
      name: req.params.name
    }
  }).then(batter => res.json(batter));
});

// get players by team by year
batterRouter.get("/:year/teams/:team", (req, res) => {
  AllBatters.findAll({
    where: {
      year: req.params.year,
      team: req.params.team
    }
  }).then(team => res.json(team));
});

module.exports = batterRouter;
