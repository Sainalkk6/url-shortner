"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllUrl = exports.redirectUrl = exports.postUrl = void 0;
const zod_1 = require("zod");
const url_shorten_services_1 = __importDefault(require("../services/url-shorten.services"));
const postUrl = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const urlSchema = zod_1.z.string().url();
        const originalUrl = urlSchema.parse(req.body.original_url);
        const shortUrl = yield url_shorten_services_1.default.createShortUrl(originalUrl);
        res.status(201).json(shortUrl);
        return;
    }
    catch (err) {
        res.json("Please provide a valid url");
        return;
    }
});
exports.postUrl = postUrl;
const redirectUrl = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const originalUrl = yield url_shorten_services_1.default.getOriginalUrl(req.params.url);
    if (originalUrl) {
        return res.redirect(originalUrl);
    }
    return res.status(404).json({ error: "URL not found" });
});
exports.redirectUrl = redirectUrl;
const getAllUrl = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(456);
    const urls = yield url_shorten_services_1.default.getAllUrls();
    return res.status(200).json(urls);
});
exports.getAllUrl = getAllUrl;
