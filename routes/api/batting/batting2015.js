const express = require("express");
const router = express.Router();
const db = require("../../../config/database");
const Batting2015 = require("../../../models/batters/Batting2015");
const Sequelize = require("sequelize");

router.get("/", (req, res) => {
  Batting2015.findAll().then(batters => res.json(batters));
});

module.exports = router;
