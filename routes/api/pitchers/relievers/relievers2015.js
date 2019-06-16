const express = require("express");
const router = express.Router();
const db = require("../../../../config/database");
const Relievers2015 = require("../../../../models/pitchers/relievers/Relievers2015");
const Sequelize = require("sequelize");

router.get("/", (req, res) => {
  Relievers2015.findAll({
    order: [["war", "DESC"]]
  }).then(relievers => res.json(relievers));
});

// get reliever by name
router.get("/players/:name", (req, res) => {
  Relievers2015.findOne({
    where: {
      name: req.params.name
    }
  }).then(reliever => res.json(reliever));
});

// get team from 2015
router.get("/teams/:teamName", (req, res) => {
  Relievers2015.findAll({
    where: {
      team: req.params.teamName
    }
  }).then(team => res.json(team));
});

module.exports = router;
