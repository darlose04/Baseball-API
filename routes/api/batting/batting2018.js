const express = require("express");
const router = express.Router();
const db = require("../../../config/database");
const Batting2018 = require("../../../models/batters/Batting2018");
const Sequelize = require("sequelize");

router.get("/", (req, res) => {
  Batting2018.findAll().then(batters => res.json(batters));
});

// get player from 2018 by name
router.get("/:name", (req, res) => {
  Batting2018.findOne({
    where: {
      name: req.params.name
    }
  }).then(batter => res.json(batter));
});

module.exports = router;
