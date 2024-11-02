"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Url = void 0;
const sequelize_1 = require("sequelize");
const _1 = __importDefault(require("."));
class Url extends sequelize_1.Model {
}
exports.Url = Url;
Url.init({
    url: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    shortedUrl: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
}, {
    sequelize: _1.default,
});
