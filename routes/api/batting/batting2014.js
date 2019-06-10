const express = require("express");
const router = express.Router();
const db = require("../../../config/database");
const Batting2014 = require("../../../models/batters/Batting2014");
const Sequelize = require("sequelize");

router.get("/", (req, res) => {
  Batting2014.findAll().then(batters => res.json(batters));
});

module.exports = router;
