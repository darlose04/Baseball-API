const express = require("express");
const router = express.Router();
const db = require("../../../../config/database");
const Starters2018 = require("../../../../models/pitchers/starters/Starters2018");
const Sequelize = require("sequelize");

router.get("/", (req, res) => {
  Starters2018.findAll({
    order: [["war", "DESC"]]
  }).then(starters => res.json(starters));
});

module.exports = router;
