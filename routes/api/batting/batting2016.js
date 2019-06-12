const express = require("express");
const router = express.Router();
const db = require("../../../config/database");
const Batting2016 = require("../../../models/batters/Batting2016");
const Sequelize = require("sequelize");

router.get("/", (req, res) => {
  Batting2016.findAll({
    order: [["war", "DESC"]]
  }).then(batters => res.json(batters));
});

// get player from 2016 by name
router.get("/:name", (req, res) => {
  Batting2016.findOne({
    where: {
      name: req.params.name
    }
  }).then(batter => res.json(batter));
});

module.exports = router;
