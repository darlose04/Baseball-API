const express = require("express");
const router = express.Router();
const db = require("../../../config/database");
const Batting2017 = require("../../../models/batters/Batting2017");
const Sequelize = require("sequelize");

router.get("/", (req, res) => {
  Batting2017.findAll().then(batters => res.json(batters));
});

module.exports = router;
