const express = require("express");
const router = express.Router();
const db = require("../../../../config/database");
const AllStarters = require("../../../../models/pitchers/starters/AllStarters");
const Sequelize = require("sequelize");

router.get("/", (req, res) => {
  AllStarters.findAll({
    order: [["team", "ASC"]]
  }).then(relievers => res.json(relievers));
});

// get starter by name
router.get("/players/:name", (req, res) => {
  AllStarters.findAll({
    where: {
      name: req.params.name
    }
  }).then(starter => res.json(starter));
});

module.exports = router;
