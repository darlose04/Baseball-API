const express = require("express");
const router = express.Router();
const db = require("../../../../config/database");
const AllRelievers = require("../../../../models/pitchers/relievers/AllRelievers");
const Sequelize = require("sequelize");

router.get("/", (req, res) => {
  AllRelievers.findAll({
    order: [["team", "ASC"]]
  }).then(relievers => res.json(relievers));
});

// get reliever by name
router.get("/players/:name", (req, res) => {
  AllRelievers.findAll({
    where: {
      name: req.params.name
    }
  }).then(reliever => res.json(reliever));
});

module.exports = router;
