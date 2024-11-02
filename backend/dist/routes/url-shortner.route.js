"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const url_shorten_controller_1 = require("../controller/url-shorten.controller");
const express_1 = require("express");
const router = (0, express_1.Router)();
router.post("/", url_shorten_controller_1.postUrl);
router.get("/:url", url_shorten_controller_1.redirectUrl);
router.get("/", url_shorten_controller_1.getAllUrl);
exports.default = router;
