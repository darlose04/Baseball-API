const express = require("express");
const router = express.Router();
const db = require("../../../config/database");
const AllBatters = require("../../../models/batters/AllBatters");
const Sequelize = require("sequelize");
const Op = Sequelize.Op;

// get all players from 2016
router.get("/", (req, res) => {
  AllBatters.findAll({
    where: {
      year: 2016
    },
    order: [["war", "DESC"]]
  }).then(batters => res.json(batters));
});

// get player from 2016 by name
router.get("/players/:name", (req, res) => {
  AllBatters.findOne({
    where: {
      year: 2016,
      name: req.params.name
    }
  }).then(batter => res.json(batter));
});

// get team from 2016
router.get("/teams/:teamName", (req, res) => {
  AllBatters.findAll({
    where: {
      year: 2016,
      team: req.params.teamName
    }
  }).then(team => res.json(team));
});

module.exports = router;
