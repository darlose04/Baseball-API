const express = require("express");
const router = express.Router();
const AllPitchers = require("../../models/AllPitchers");
const Sequelize = require("sequelize");
const Op = Sequelize.Op;

// get all pitchers from the table
router.get("/", (req, res) => {
  AllPitchers.findAll({
    order: [["team", "ASC"]]
  }).then(pitchers => res.json(pitchers));
});

// get individual pitcher stats from every year
router.get("/players/:name", (req, res) => {
  AllPitchers.findAll({
    where: {
      name: req.params.name
    }
  }).then(pitcher => res.json(pitcher));
});

// get pitchers by year
router.get("/:year", (req, res) => {
  AllPitchers.findAll({
    where: {
      year: req.params.year
    },
    order: [["war", "DESC"]]
  }).then(pitchers => res.json(pitchers));
});

// get individual pitcher by year
router.get("/:year/players/:name", (req, res) => {
  AllPitchers.findOne({
    where: {
      year: req.params.year,
      name: req.params.name
    }
  }).then(pitcher => res.json(pitcher));
});

// get pitchers by team by year
router.get("/:year/teams/:team", (req, res) => {
  AllPitchers.findAll({
    where: {
      year: req.params.year,
      team: req.params.team
    }
  }).then(team => res.json(team));
});

module.exports = router;
