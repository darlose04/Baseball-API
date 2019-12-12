const sequelize = require("../config/database");
const supertest = require("supertest");
const app = require("../app");
const api = supertest(app);

describe("testing routes that return all starting pitching statistics", () => {
  test("complete stats are returned as json", async () => {
    console.log("Entered test...");
    await api
      .get("/api/pitching/starters")
      .expect(200)
      .expect("Content-Type", /application\/json/);
  });

  test("Individual starting pitcher statistics from each year are returned as json", async () => {
    await api
      .get("/api/pitching/starters/players/Jake Arrieta")
      .expect(200)
      .expect("Content-Type", /application\/json/);
  });

  test("Getting starting pitchers by year returns yearly stats as json", async () => {
    await api
      .get("/api/pitching/starters/2014")
      .expect(200)
      .expect("Content-Type", /application\/json/);
  });

  test("Get individual starting pitcher stats by year as json", async () => {
    await api
      .get("/api/pitching/starters/2016/players/Madison Bumgarner")
      .expect(200)
      .expect("Content-Type", /application\/json/);
  });

  test("Getting starting pitcher stats by year, by team returned as json", async () => {
    await api
      .get("/api/pitching/starters/2018/teams/Angels")
      .expect(200)
      .expect("Content-Type", /application\/json/);
  });
});

afterAll(() => {
  sequelize.close();
});
