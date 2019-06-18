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

// Landing Page
app.get("/", (req, res) => {
  res.render("landing");
});

// Glossary Page
app.get("/glossary", (req, res) => {
  res.render("glossary");
});

// Hitting Routes By Year
app.use("/api/batting", require("./routes/api/batting"));

// app.use("/api/batting/2014", require("./routes/api/batting/batting2014"));
// app.use("/api/batting/2015", require("./routes/api/batting/batting2015"));
// app.use("/api/batting/2016", require("./routes/api/batting/batting2016"));
// app.use("/api/batting/2017", require("./routes/api/batting/batting2017"));
// app.use("/api/batting/2018", require("./routes/api/batting/batting2018"));

// Starter Routes By Year
app.use(
  "/api/pitching/starters/2014",
  require("./routes/api/pitchers/starters/starters2014")
);
app.use(
  "/api/pitching/starters/2015",
  require("./routes/api/pitchers/starters/starters2015")
);
app.use(
  "/api/pitching/starters/2016",
  require("./routes/api/pitchers/starters/starters2016")
);
app.use(
  "/api/pitching/starters/2017",
  require("./routes/api/pitchers/starters/starters2017")
);
app.use(
  "/api/pitching/starters/2018",
  require("./routes/api/pitchers/starters/starters2018")
);

// All starters
app.use(
  "/api/pitching/starters/all",
  require("./routes/api/pitchers/starters/allStarters")
);

// Reliever Routes By Year
app.use(
  "/api/pitching/relievers/2014",
  require("./routes/api/pitchers/relievers/relievers2014")
);
app.use(
  "/api/pitching/relievers/2015",
  require("./routes/api/pitchers/relievers/relievers2015")
);
app.use(
  "/api/pitching/relievers/2016",
  require("./routes/api/pitchers/relievers/relievers2016")
);
app.use(
  "/api/pitching/relievers/2017",
  require("./routes/api/pitchers/relievers/relievers2017")
);
app.use(
  "/api/pitching/relievers/2018",
  require("./routes/api/pitchers/relievers/relievers2018")
);

// All relievers
app.use(
  "/api/pitching/relievers/all",
  require("./routes/api/pitchers/relievers/allRelievers")
);

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => console.log(`BaseballAPI has started on port ${PORT}`));
