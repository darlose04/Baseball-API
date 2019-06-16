const express = require("express");
const router = express.Router();
const db = require("../../../../config/database");
const Starters2015 = require("../../../../models/pitchers/starters/Starters2015");
const Sequelize = require("sequelize");

router.get("/", (req, res) => {
  Starters2015.findAll().then(starters => res.json(starters));
});

module.exports = router;
