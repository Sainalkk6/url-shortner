"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const url_shorten_controller_1 = require("../controller/url-shorten.controller");
const router = express_1.default.Router();
router.post("/", url_shorten_controller_1.postUrl);
router.get("/:url", url_shorten_controller_1.redirectUrl);
router.get("/", url_shorten_controller_1.getAllUrl);
exports.default = router;
