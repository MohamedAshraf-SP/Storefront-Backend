"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var imgMdlwr_1 = require("../middlewares/imgMdlwr");
var route = express_1.default.Router();
route.get('/', imgMdlwr_1.resize, function (req, res) {
});
exports.default = route;
