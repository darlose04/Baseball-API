const express = require("express");
const router = express.Router();
const db = require("../../../../config/database");
const Relievers2017 = require("../../../../models/pitchers/relievers/Relievers2017");
const Sequelize = require("sequelize");

router.get("/", (req, res) => {
  Relievers2017.findAll({
    order: [["war", "DESC"]]
  }).then(relievers => res.json(relievers));
});

// get reliever by name
router.get("/players/:name", (req, res) => {
  Relievers2017.findOne({
    where: {
      name: req.params.name
    }
  }).then(reliever => res.json(reliever));
});

// get team from 2017
router.get("/teams/:teamName", (req, res) => {
  Relievers2017.findAll({
    where: {
      team: req.params.teamName
    }
  }).then(team => res.json(team));
});

module.exports = router;
