const express = require("express");
const mysql = require("mysql");

const app = express();

const db = mysql.createConnection({
  host: "localhost",
  user: "zach",
  password: process.env.PASSWORD,
  database: "baseballapi"
});

db.connect();

app.get("/batting2018", (req, res) => {
  const sql = `SELECT
    baseball2018.name,
    baseball2018.team,
    baseball2018.games,
    baseball2018.plate_appearances,
    baseball2018.homeruns,
    baseball2018.runs,
    baseball2018.rbi,
    baseball2018.sb,
    baseball2018.bb_perc,
    baseball2018.k_perc,
    baseball2018.iso,
    baseball2018.babip,
    baseball2018.avg,
    baseball2018.obp,
    baseball2018.slg,
    baseball2018.ops,
    baseball2018.wOBA,
    baseball2018.wRC_plus,
    baseball2018.bsr,
    baseball2018.off,
    baseball2018.def,
    baseball2018.war
    FROM baseball2018`;

  db.query(sql, (err, result) => {
    if (err) throw err;
    res.send(result);
  });
});

app.listen(5000, () => console.log("BaseballAPI has started..."));
