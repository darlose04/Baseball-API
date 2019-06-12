const express = require("express");
const router = express.Router();
const db = require("../../../config/database");
const Batting2015 = require("../../../models/batters/Batting2015");
const Sequelize = require("sequelize");

router.get("/", (req, res) => {
  Batting2015.findAll({
    order: [["war", "DESC"]]
  }).then(batters => res.json(batters));
});

// get player from 2015 by name
router.get("/:name", (req, res) => {
  Batting2015.findOne({
    where: {
      name: req.params.name
    }
  }).then(batter => res.json(batter));
});

module.exports = router;
