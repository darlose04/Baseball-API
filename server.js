const express = require("express");
require("dotenv").config();
// const mysql = require("mysql");

// const db = mysql.createConnection({
//   host: "localhost",
//   user: "zach",
//   password: process.env.PASSWORD,
//   database: "baseballapi"
// });

const db = require("./config/database");

db.authenticate()
  .then(() => console.log("Database connected..."))
  .catch(err => console.log(err));

// db.connect();
const app = express();

// app.get("/batting2018", (req, res) => {
//   const sql = `SELECT
//     batting2018.name,
//     batting2018.team,
//     batting2018.games,
//     batting2018.plate_appearances,
//     batting2018.homeruns,
//     batting2018.runs,
//     batting2018.rbi,
//     batting2018.sb,
//     batting2018.bb_perc,
//     batting2018.k_perc,
//     batting2018.iso,
//     batting2018.babip,
//     batting2018.avg,
//     batting2018.obp,
//     batting2018.slg,
//     batting2018.ops,
//     batting2018.wOBA,
//     batting2018.wRC_plus,
//     batting2018.bsr,
//     batting2018.off,
//     batting2018.def,
//     batting2018.war
//     FROM batting2018
//     ORDER BY war desc`;

//   db.query(sql, (err, result) => {
//     if (err) throw err;
//     res.send(result);
//   });
// });

app.set("view engine", "ejs");

// Landing Page
app.get("/", (req, res) => {
  res.render("landing");
});

// Hitting Routes By Year
app.use("/api/batting/2014", require("./routes/api/batting/batting2014"));
app.use("/api/batting/2015", require("./routes/api/batting/batting2015"));
app.use("/api/batting/2016", require("./routes/api/batting/batting2016"));
app.use("/api/batting/2017", require("./routes/api/batting/batting2017"));
app.use("/api/batting/2018", require("./routes/api/batting/batting2018"));

// Starter Routes
app.use(
  "/api/pitching/starters/2018",
  require("./routes/api/pitchers/starters/starters2018")
);

// Reliever Routes
app.use(
  "/api/pitching/relievers/2018",
  require("./routes/api/pitchers/relievers/relievers2018")
);

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => console.log(`BaseballAPI has started on port ${PORT}`));
