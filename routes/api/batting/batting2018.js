const express = require("express");
const router = express.Router();
const db = require("../../../config/database");
const Batting2018 = require("../../../models/batters/Batting2018");
const Sequelize = require("sequelize");

router.get("/", (req, res) => {
  Batting2018.findAll({
    order: [["war", "DESC"]]
  }).then(batters => res.json(batters));
});

// get player from 2018 by name
router.get("/players/:name", (req, res) => {
  Batting2018.findOne({
    where: {
      name: req.params.name
    }
  }).then(batter => res.json(batter));
});

// get team from 2018
router.get("/teams/:teamName", (req, res) => {
  Batting2018.findAll({
    where: {
      team: req.params.teamName
    }
  }).then(team => res.json(team));
});

module.exports = router;
