const express = require("express");
const router = express.Router();
const db = require("../../../config/database");
const Batting2014 = require("../../../models/batters/Batting2014");
const Sequelize = require("sequelize");
const Op = Sequelize.Op;

// get all players in 2014 table
router.get("/", (req, res) => {
  Batting2014.findAll({
    order: [["war", "DESC"]]
  }).then(batters => res.json(batters));
});

// get player from 2014 by name
router.get("/players/:name", (req, res) => {
  Batting2014.findOne({
    where: {
      name: req.params.name
    }
  }).then(batter => res.json(batter));
});

// get team from 2014
router.get("/teams/:teamName", (req, res) => {
  Batting2014.findAll({
    where: {
      team: req.params.teamName
    }
  }).then(team => res.json(team));
});

module.exports = router;
