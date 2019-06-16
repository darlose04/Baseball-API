const express = require("express");
const router = express.Router();
const db = require("../../../../config/database");
const Starters2014 = require("../../../../models/pitchers/starters/Starters2014");
const Sequelize = require("sequelize");

router.get("/", (req, res) => {
  Starters2014.findAll().then(starters => res.json(starters));
});

module.exports = router;
