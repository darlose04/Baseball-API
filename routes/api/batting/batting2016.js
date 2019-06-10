const express = require("express");
const router = express.Router();
const db = require("../../../config/database");
const Batting2016 = require("../../../models/batters/Batting2016");
const Sequelize = require("sequelize");

router.get("/", (req, res) => {
  Batting2016.findAll().then(batters => res.json(batters));
});

module.exports = router;