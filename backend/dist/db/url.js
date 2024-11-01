"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const knex_1 = __importDefault(require("./knex"));
const createURL = (url) => (0, knex_1.default)("urls").insert(url);
const getURLS = () => (0, knex_1.default)("urls").select("*");
const getSpecificURL = (url) => (0, knex_1.default)("urls").select("original_url").where("shorted_url", url);
const checkExistence = (url) => (0, knex_1.default)("urls").select("shorted_url").where("original_url", url);
exports.default = { createURL, getURLS, getSpecificURL, checkExistence };
