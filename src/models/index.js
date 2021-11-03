"use strict";
const { Sequelize, DataTypes } = require("sequelize");
require("dotenv").config();
const Collections = require("./collection-class");
const food = require("./food.model");
const clothes = require("./clothes.model");
const POSTGRES_URI =
  process.env.NODE_ENV === "production"
    ? process.env.DATABASE_URL
    : "sqlite:memory:";
// NOTE we will configure connection option for proud
let sequelizeOptions =
  process.env.NODE_ENV === "production"
    ? {
        dialect: "postgres",
        dialectOptions: {
          ssl: {
            require: true,
            rejectUnauthorized: false,
          },
        },
      }
    : {};
const sequelize = new Sequelize(POSTGRES_URI, sequelizeOptions);
const Food = new Collections(food(sequelize, DataTypes));
const Clothes = new Collections(clothes(sequelize, DataTypes));

module.exports = {
  db: sequelize,
  Food,
  Clothes,
};
