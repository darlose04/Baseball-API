const sequelize = require("../config/database");
const supertest = require("supertest");
const app = require("../app");
const api = supertest(app);

describe("testing routes that return hitting statistics", () => {
  test("complete stats are returned as json", async () => {
    console.log("Entered test...");
    await api
      .get("/api/batting")
      .expect(200)
      .expect("Content-Type", /application\/json/);
  });

  test("Individual batter statistics from each year are returned as json", async () => {
    await api
      .get("/api/batting/players/Mike Trout")
      .expect(200)
      .expect("Content-Type", /application\/json/);
  });

  test("Getting batters by year returns yearly stats as json", async () => {
    await api
      .get("/api/batting/2014")
      .expect(200)
      .expect("Content-Type", /application\/json/);
  });

  test("Get individual batter stats by year as json", async () => {
    await api
      .get("/api/batting/2016/players/Kris Bryant")
      .expect(200)
      .expect("Content-Type", /application\/json/);
  });

  test("Getting batter stats by year, by team returned as json", async () => {
    await api
      .get("/api/batting/2017/teams/Cubs")
      .expect(200)
      .expect("Content-Type", /application\/json/);
  });
});

afterAll(() => {
  sequelize.close();
});
