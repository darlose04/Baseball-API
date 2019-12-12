const sequelize = require("../config/database");
const supertest = require("supertest");
const app = require("../app");
const api = supertest(app);

describe("testing routes that return all pitching statistics (starters and relievers)", () => {
  test("complete stats are returned as json", async () => {
    console.log("Entered test...");
    await api
      .get("/api/pitching/pitchers")
      .expect(200)
      .expect("Content-Type", /application\/json/);
  });

  test("Individual pitcher statistics from each year are returned as json", async () => {
    await api
      .get("/api/pitching/pitchers/players/Jon Lester")
      .expect(200)
      .expect("Content-Type", /application\/json/);
  });

  test("Getting pitchers by year returns yearly stats as json", async () => {
    await api
      .get("/api/pitching/pitchers/2015")
      .expect(200)
      .expect("Content-Type", /application\/json/);
  });

  test("Get individual pitcher stats by year as json", async () => {
    await api
      .get("/api/pitching/pitchers/2016/players/Max Scherzer")
      .expect(200)
      .expect("Content-Type", /application\/json/);
  });

  test("Getting pitcher stats by year, by team returned as json", async () => {
    await api
      .get("/api/pitching/pitchers/2018/teams/Yankees")
      .expect(200)
      .expect("Content-Type", /application\/json/);
  });
});

afterAll(() => {
  sequelize.close();
});
