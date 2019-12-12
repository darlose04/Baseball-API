const sequelize = require("../config/database");
const supertest = require("supertest");
const app = require("../app");
const api = supertest(app);

describe("testing routes that return relief pitching statistics", () => {
  test("complete stats are returned as json", async () => {
    console.log("Entered test...");
    await api
      .get("/api/pitching/relievers")
      .expect(200)
      .expect("Content-Type", /application\/json/);
  });

  test("Individual relief pitcher statistics from each year are returned as json", async () => {
    await api
      .get("/api/pitching/relievers/players/Aroldis Chapman")
      .expect(200)
      .expect("Content-Type", /application\/json/);
  });

  test("Getting relief pitchers by year returns yearly stats as json", async () => {
    await api
      .get("/api/pitching/relievers/2014")
      .expect(200)
      .expect("Content-Type", /application\/json/);
  });

  test("Get individual relief pitcher stats by year as json", async () => {
    await api
      .get("/api/pitching/relievers/2016/players/Hunter Strickland")
      .expect(200)
      .expect("Content-Type", /application\/json/);
  });

  test("Getting relief pitcher stats by year, by team returned as json", async () => {
    await api
      .get("/api/pitching/relievers/2018/teams/Rangers")
      .expect(200)
      .expect("Content-Type", /application\/json/);
  });
});

afterAll(() => {
  sequelize.close();
});
