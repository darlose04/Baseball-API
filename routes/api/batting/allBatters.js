const express = require("express");
const router = express.Router();
const db = require("../../../config/database");
const AllBatters = require("../../../models/batters/AllBatters");
const Sequelize = require("sequelize");
const Op = Sequelize.Op;

// get all players
router.get("/", (req, res) => {
  AllBatters.findAll({
    order: [["team", "DESC"]]
  }).then(batters => res.json(batters));
});

module.exports = router;
