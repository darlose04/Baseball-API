const express = require("express");
const router = express.Router();
const AllStarters = require("../../models/AllStarters");
const Sequelize = require("sequelize");

// get all starters from the table
router.get("/", (req, res) => {
  AllStarters.findAll({
    order: [["team", "ASC"]]
  }).then(starters => res.json(starters));
});

// get individual starter stats from every year
router.get("/players/:name", (req, res) => {
  AllStarters.findAll({
    where: {
      name: req.params.name
    }
  }).then(starter => res.json(starter));
});

// get starters by year
router.get("/:year", (req, res) => {
  AllStarters.findAll({
    where: {
      year: req.params.year
    },
    order: [["war", "DESC"]]
  }).then(starters => res.json(starters));
});

// get individual starter by year
router.get("/:year/players/:name", (req, res) => {
  AllStarters.findOne({
    where: {
      year: req.params.year,
      name: req.params.name
    }
  }).then(starter => res.json(starter));
});

// get starters by team by year
router.get("/:year/teams/:team", (req, res) => {
  AllStarters.findAll({
    where: {
      year: req.params.year,
      team: req.params.team
    }
  }).then(team => res.json(team));
});

module.exports = router;
