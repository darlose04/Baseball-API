const express = require("express");
const router = express.Router();
const db = require("../../../../config/database");
const Starters2017 = require("../../../../models/pitchers/starters/Starters2017");
const Sequelize = require("sequelize");

router.get("/", (req, res) => {
  Starters2017.findAll({
    order: [["war", "DESC"]]
  }).then(starters => res.json(starters));
});

module.exports = router;
