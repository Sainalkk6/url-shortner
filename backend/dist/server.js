"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const body_parser_1 = __importDefault(require("body-parser"));
const url_shorten_route_1 = __importDefault(require("./route/url-shorten.route"));
const app = (0, express_1.default)();
const port = 3012;
app.use(body_parser_1.default.urlencoded({ extended: false }));
app.use(body_parser_1.default.json());
app.use((0, cors_1.default)({ origin: "http://localhost:3000" }));
app.use("/", url_shorten_route_1.default);
app.listen(port, () => console.log(`server is running on port ${port}`));
