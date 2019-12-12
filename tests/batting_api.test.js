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
});

afterAll(() => {});
