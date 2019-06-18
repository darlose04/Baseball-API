const express = require("express");
const router = express.Router();
const AllRelievers = require("../../models/AllRelievers");
const Sequelize = require("sequelize");

// get all relievers from the table
router.get("/", (req, res) => {
  AllRelievers.findAll({
    order: [["team", "ASC"]]
  }).then(relievers => res.json(relievers));
});

// get individual reliever stats from every year
router.get("/players/:name", (req, res) => {
  AllRelievers.findAll({
    where: {
      name: req.params.name
    }
  }).then(reliever => res.json(reliever));
});

// get relievers by year
router.get("/:year", (req, res) => {
  AllRelievers.findAll({
    where: {
      year: req.params.year
    },
    order: [["war", "DESC"]]
  }).then(relievers => res.json(relievers));
});

// get individual reliever by year
router.get("/:year/players/:name", (req, res) => {
  AllRelievers.findOne({
    where: {
      year: req.params.year,
      name: req.params.name
    }
  }).then(reliever => res.json(reliever));
});

// get relievers by team by year
router.get("/:year/teams/:team", (req, res) => {
  AllRelievers.findAll({
    where: {
      year: req.params.year,
      team: req.params.team
    }
  }).then(team => res.json(team));
});

module.exports = router;
