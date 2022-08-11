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
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deletee = exports.edit = exports.create = exports.show = exports.index = void 0;
var bcrypt_1 = __importDefault(require("bcrypt"));
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
var users_1 = require("../models/users");
var crud = new users_1.usersCRUD();
var index = function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var result;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                try {
                    jsonwebtoken_1.default.verify(req.body.token, process.env.JWTsecret);
                }
                catch (error) {
                    res.status(401).json({ error: 'invalid token', err: error });
                }
                return [4 /*yield*/, crud.index()];
            case 1:
                result = _a.sent();
                res.send(result);
                next();
                return [2 /*return*/];
        }
    });
}); };
exports.index = index;
var show = function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var product;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                try {
                    jsonwebtoken_1.default.verify(req.body.token, process.env.JWTsecret);
                }
                catch (error) {
                    res.status(401).json({ error: 'invalid token', err: error });
                }
                return [4 /*yield*/, crud.show(req.params.id)];
            case 1:
                product = _a.sent();
                res.json(product);
                // .json(res)
                next();
                return [2 /*return*/];
        }
    });
}); };
exports.show = show;
var create = function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var fristName, lastName, password, token, hash, neworder, err_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                fristName = req.body.fristName;
                lastName = req.body.lastName;
                password = req.body.password;
                token = jsonwebtoken_1.default.sign({ fristName: fristName, lastName: lastName }, process.env.JWTsecret);
                hash = bcrypt_1.default.hashSync(req.body.password + process.env.pepper, parseInt(process.env.SALTROUNDS));
                return [4 /*yield*/, crud.create(fristName, lastName, hash)];
            case 1:
                neworder = _a.sent();
                res.json({ massage: 'created', token: token });
                return [3 /*break*/, 3];
            case 2:
                err_1 = _a.sent();
                res.status(400);
                res.json(err_1);
                return [3 /*break*/, 3];
            case 3:
                next();
                return [2 /*return*/];
        }
    });
}); };
exports.create = create;
var edit = function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var hash, edited;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                try {
                    jsonwebtoken_1.default.verify(req.body.token, process.env.JWTsecret);
                }
                catch (error) {
                    res.status(401).json({ error: 'invalid token', err: error });
                }
                hash = bcrypt_1.default.hashSync(req.body.password + process.env.pepper, parseInt(process.env.SALTROUNDS));
                return [4 /*yield*/, crud.edit(req.query.id, req.body.fristName, req.body.lastName, hash)];
            case 1:
                edited = _a.sent();
                res.json({ massage: 'edited' });
                next();
                return [2 /*return*/];
        }
    });
}); };
exports.edit = edit;
var deletee = function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var deleted;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                try {
                    jsonwebtoken_1.default.verify(req.body.token, process.env.JWTsecret);
                }
                catch (error) {
                    res.status(401).json({ error: 'invalid token', err: error });
                }
                return [4 /*yield*/, crud.delete(req.params.id)];
            case 1:
                deleted = _a.sent();
                res.json({ massage: 'deleted' });
                next();
                return [2 /*return*/];
        }
    });
}); };
exports.deletee = deletee;
