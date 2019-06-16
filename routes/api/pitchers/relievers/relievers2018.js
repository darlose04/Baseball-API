const express = require("express");
const router = express.Router();
const db = require("../../../../config/database");
const Relievers2018 = require("../../../../models/pitchers/relievers/Relievers2018");
const Sequelize = require("sequelize");

router.get("/", (req, res) => {
  Relievers2018.findAll({
    order: [["war", "DESC"]]
  }).then(relievers => res.json(relievers));
});

// get reliever by name
router.get("/players/:name", (req, res) => {
  Relievers2018.findOne({
    where: {
      name: req.params.name
    }
  }).then(reliever => res.json(reliever));
});

// get team from 2018
router.get("/teams/:teamName", (req, res) => {
  Relievers2018.findAll({
    where: {
      team: req.params.teamName
    }
  }).then(team => res.json(team));
});

module.exports = router;
