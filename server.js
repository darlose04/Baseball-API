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
    batting2018.name,
    batting2018.team,
    batting2018.games,
    batting2018.plate_appearances,
    batting2018.homeruns,
    batting2018.runs,
    batting2018.rbi,
    batting2018.sb,
    batting2018.bb_perc,
    batting2018.k_perc,
    batting2018.iso,
    batting2018.babip,
    batting2018.avg,
    batting2018.obp,
    batting2018.slg,
    batting2018.ops,
    batting2018.wOBA,
    batting2018.wRC_plus,
    batting2018.bsr,
    batting2018.off,
    batting2018.def,
    batting2018.war
    FROM batting2018`;

  db.query(sql, (err, result) => {
    if (err) throw err;
    res.send(result);
  });
});

app.listen(5000, () => console.log("BaseballAPI has started..."));
