const express = require("express");
const router = express.Router();
const db = require("../../../config/database");
const Batting2018 = require("../../../models/Batting2018");
const Sequelize = require("sequelize");

router.get("/", (req, res) => {
  Batting2018.findAll().then(batters => res.json(batters));
});

module.exports = router;
