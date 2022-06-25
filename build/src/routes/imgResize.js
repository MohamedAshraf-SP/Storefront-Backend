"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var imgMdlwr_1 = require("../middlewares/imgMdlwr");
var route = express_1.default.Router();
route.get('/', imgMdlwr_1.resize, function (req, res) {
    // console.log('\nEnd point started...\n',res.locals.metadata);
    var height = parseInt(req.query.height);
    var width = parseInt(req.query.width);
    var obj = {
        height: height,
        width: width,
        path: req.query.path,
        metadata: res.locals.metadata,
    };
    res.status(200);
    res.json(Object.assign(obj));
    //console.log('\nEnd point finished...\n',(res.locals.imgDIST));
});
exports.default = route;
