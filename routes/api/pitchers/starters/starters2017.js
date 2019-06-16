const express = require("express");
const router = express.Router();
const db = require("../../../../config/database");
const Starters2017 = require("../../../../models/pitchers/starters/Starters2017");
const Sequelize = require("sequelize");

router.get("/", (req, res) => {
  Starters2017.findAll({
    order: [["war", "DESC"]]
  }).then(starters => res.json(starters));
});

// get pitcher by name
router.get("/players/:name", (req, res) => {
  Starters2017.findOne({
    where: {
      name: req.params.name
    }
  }).then(starter => res.json(starter));
});

// get team from 2017
router.get("/teams/:teamName", (req, res) => {
  Starters2017.findAll({
    where: {
      team: req.params.teamName
    }
  }).then(team => res.json(team));
});

module.exports = router;
