"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const sequelize_2 = require("./sequelize");
class Url extends sequelize_1.Model {
}
Url.init({
    url: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    shortUrl: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
}, {
    sequelize: sequelize_2.sequelize,
    modelName: "Url",
});
exports.default = Url;
