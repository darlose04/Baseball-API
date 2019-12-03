const Sequelize = require("sequelize");
const supertest = require("supertest");
const server = require("../server");
const api = supertest(server);
