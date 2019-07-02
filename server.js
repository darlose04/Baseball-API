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

app.set("view engine", "ejs");

let allowCrossDomain = function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
};

app.configure(function() {
  app.use(allowCrossDomain);
});

// Landing Page
app.get("/", (req, res) => {
  res.render("landing");
});

// Glossary Page
app.get("/glossary", (req, res) => {
  res.render("glossary");
});

// Hitting Routes
app.use("/api/batting", require("./routes/api/batting"));

// All Pitchers Routes
app.use("/api/pitching/pitchers", require("./routes/api/pitchers"));

// Starter Routes
app.use("/api/pitching/starters", require("./routes/api/starting"));

// Reliever Routes
app.use("/api/pitching/relievers", require("./routes/api/relieving"));

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => console.log(`BaseballAPI has started on port ${PORT}`));
