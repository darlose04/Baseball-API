const express = require("express");
const cors = require("cors");
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
app.use(cors());

app.set("view engine", "ejs");

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

module.exports = app;
