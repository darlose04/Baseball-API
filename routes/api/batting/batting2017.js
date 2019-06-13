const express = require("express");
const router = express.Router();
const db = require("../../../config/database");
const Batting2017 = require("../../../models/batters/Batting2017");
const Sequelize = require("sequelize");

router.get("/", (req, res) => {
  Batting2017.findAll({
    order: [["war", "DESC"]]
  }).then(batters => res.json(batters));
});

// get player from 2017 by name
router.get("/:name", (req, res) => {
  Batting2017.findOne({
    where: {
      name: req.params.name
    }
  }).then(batter => res.json(batter));
});

// get team from 2017
router.get("/teams/:teamName", (req, res) => {
  Batting2017.findAll({
    where: {
      team: req.params.teamName
    }
  }).then(team => res.json(team));
});

module.exports = router;
