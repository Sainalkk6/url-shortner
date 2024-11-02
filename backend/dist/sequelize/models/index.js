"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
require("dotenv/config");
const options = {
    username: process.env.POSTGRES_USERNAME,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DATABASENAME,
    port: process.env.POSTGRES_DATABASEPORT,
    dialect: "postgres",
    host: process.env.POSTGRES_DATABASE_HOST,
    sync: { alter: true, logging: true }
};
const sequelize = new sequelize_1.Sequelize(options);
exports.default = sequelize;
