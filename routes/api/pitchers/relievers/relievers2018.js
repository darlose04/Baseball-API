const express = require("express");
const router = express.Router();
const db = require("../../../../config/database");
const Relievers2018 = require("../../../../models/pitchers/relievers/Relievers2018");
const Sequelize = require("sequelize");

router.get("/", (req, res) => {
  Relievers2018.findAll().then(relievers => res.json(relievers));
});

module.exports = router;
