const express = require("express");
const router = express.Router();
const db = require("../../config/database");
const AllBatters = require("../../models/batters/AllBatters");
const Sequelize = require("sequelize");
const Op = Sequelize.Op;

// get all batters from the table
router.get("/", (req, res) => {
  AllBatters.findAll({
    order: [["team", "ASC"]]
  }).then(batters => res.json(batters));
});

// get individual player stats from every year
router.get("/players/:name", (req, res) => {
  AllBatters.findAll({
    where: {
      name: req.params.name
    }
  }).then(batter => res.json(batter));
});

// get batters by year
router.get("/:year", (req, res) => {
  AllBatters.findAll({
    where: {
      year: req.params.year
    },
    order: [[("war", "DESC")]]
  }).then(batters => res.json(batters));
});

module.exports = router;
