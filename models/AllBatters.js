const Sequelize = require("sequelize");
const db = require("../config/database");

const AllBatters = db.define(
  "batters",
  {
    player_id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      allowNull: false
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false
    },
    team: {
      type: Sequelize.STRING,
      allowNull: false
    },
    games: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    plate_appearances: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    homeruns: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    runs: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    rbi: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    sb: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    bb_perc: {
      type: Sequelize.STRING,
      allowNull: false
    },
    k_perc: {
      type: Sequelize.STRING,
      allowNull: false
    },
    iso: {
      type: Sequelize.DECIMAL(4, 3),
      allowNull: false
    },
    babip: {
      type: Sequelize.DECIMAL(4, 3),
      allowNull: false
    },
    avg: {
      type: Sequelize.DECIMAL(4, 3),
      allowNull: false
    },
    obp: {
      type: Sequelize.DECIMAL(4, 3),
      allowNull: false
    },
    slg: {
      type: Sequelize.DECIMAL(4, 3),
      allowNull: false
    },
    ops: {
      type: Sequelize.DECIMAL(4, 3),
      allowNull: false
    },
    wOBA: {
      type: Sequelize.DECIMAL(4, 3),
      allowNull: false
    },
    wRC_plus: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    bsr: {
      type: Sequelize.DECIMAL(4, 1),
      allowNull: false
    },
    off: {
      type: Sequelize.DECIMAL(4, 1),
      allowNull: false
    },
    def: {
      type: Sequelize.DECIMAL(4, 1),
      allowNull: false
    },
    war: {
      type: Sequelize.DECIMAL(4, 1),
      allowNull: false
    },
    year: {
      type: Sequelize.INTEGER,
      allowNull: false
    }
  },
  {
    timestamps: false,
    freezeTableName: true,
    tableName: "batters"
  }
);

module.exports = AllBatters;
