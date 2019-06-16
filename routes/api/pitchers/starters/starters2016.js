const express = require("express");
const router = express.Router();
const db = require("../../../../config/database");
const Starters2016 = require("../../../../models/pitchers/starters/Starters2016");
const Sequelize = require("sequelize");

router.get("/", (req, res) => {
  Starters2016.findAll().then(starters => res.json(starters));
});

module.exports = router;
