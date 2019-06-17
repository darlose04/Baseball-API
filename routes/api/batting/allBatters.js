const express = require("express");
const router = express.Router();
const db = require("../../../config/database");
const AllBatters = require("../../../models/batters/AllBatters");
const Sequelize = require("sequelize");
const Op = Sequelize.Op;

// get all players
router.get("/", (req, res) => {
  AllBatters.findAll({
    order: [["team", "ASC"]]
  }).then(batters => res.json(batters));
});

// get player by name
router.get("/players/:name", (req, res) => {
  Batting2014.findAll({
    where: {
      name: req.params.name
    }
  }).then(batter => res.json(batter));
});

module.exports = router;
