const express = require("express");
const router = express.Router();
const db = require("../../../config/database");
const Batting2014 = require("../../../models/batters/Batting2014");
const Batting2015 = require("../../../models/batters/Batting2015");
const Batting2016 = require("../../../models/batters/Batting2016");
const Batting2017 = require("../../../models/batters/Batting2017");
const Batting2018 = require("../../../models/batters/Batting2018");
const Sequelize = require("sequelize");
const Op = Sequelize.Op;

// get a single player's statistics from every year possible
