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
Object.defineProperty(exports, "__esModule", { value: true });
const Url_1 = require("../sequelize/models/Url");
const createShortUrl = (originalUrl) => __awaiter(void 0, void 0, void 0, function* () {
    const isExisting = yield Url_1.Url.findOne({ where: { url: originalUrl } });
    if (!!isExisting) {
        return isExisting.shortedUrl;
    }
    else {
        const shortedUrl = (Math.random() + 1).toString(36).substring(2);
        yield Url_1.Url.create({ url: originalUrl, shortedUrl });
        return shortedUrl;
    }
});
const getOriginalUrl = (shortedUrl) => __awaiter(void 0, void 0, void 0, function* () {
    const results = yield Url_1.Url.findOne({ where: { shortedUrl } });
    return results ? results.url : null;
});
const getAllUrls = () => __awaiter(void 0, void 0, void 0, function* () {
    const results = yield Url_1.Url.findAll();
    return results;
});
exports.default = { createShortUrl, getOriginalUrl, getAllUrls };
