const Sequelize = require("sequelize");
const db = require("../../../config/database");

const AllStarters = db.define(
  "starters",
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
    wins: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    losses: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    games: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    starts: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    innings_pitched: {
      type: Sequelize.DECIMAL(4, 1),
      allowNull: false
    },
    k_per_nine: {
      type: Sequelize.DECIMAL(4, 2),
      allowNull: false
    },
    bb_per_nine: {
      type: Sequelize.DECIMAL(4, 2),
      allowNull: false
    },
    hr_per_nine: {
      type: Sequelize.DECIMAL(4, 2),
      allowNull: false
    },
    babip: {
      type: Sequelize.DECIMAL(4, 3),
      allowNull: false
    },
    lob_perc: {
      type: Sequelize.STRING,
      allowNull: false
    },
    gb_perc: {
      type: Sequelize.STRING,
      allowNull: false
    },
    hr_fb: {
      type: Sequelize.STRING,
      allowNull: false
    },
    era: {
      type: Sequelize.DECIMAL(4, 2),
      allowNull: false
    },
    whip: {
      type: Sequelize.DECIMAL(4, 2),
      allowNull: false
    },
    fip: {
      type: Sequelize.DECIMAL(4, 2),
      allowNull: false
    },
    xfip: {
      type: Sequelize.DECIMAL(4, 2),
      allowNull: false
    },
    war: {
      type: Sequelize.DECIMAL(3, 1),
      allowNull: false
    },
    year: {
      type: Sequelize.DATEONLY,
      allowNull: false
    }
  },
  {
    timestamps: false,
    freezeTableName: true,
    tableName: "starters"
  }
);

module.exports = AllStarters;
