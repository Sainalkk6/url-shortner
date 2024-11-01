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
const url_1 = __importDefault(require("../db/url"));
const createShortUrl = (originalUrl) => __awaiter(void 0, void 0, void 0, function* () {
    const shortUrl = (Math.random() + 1).toString(36).substring(2);
    yield url_1.default.createURL({ original_url: originalUrl, shorted_url: shortUrl });
    return shortUrl;
});
const getOriginalUrl = (shortedUrl) => __awaiter(void 0, void 0, void 0, function* () {
    const results = yield url_1.default.getSpecificURL(shortedUrl);
    return results.length > 0 ? results[0].original_url : null;
});
const getAllUrls = () => __awaiter(void 0, void 0, void 0, function* () {
    const results = yield url_1.default.getURLS();
    return results;
});
exports.default = { createShortUrl, getOriginalUrl, getAllUrls };
