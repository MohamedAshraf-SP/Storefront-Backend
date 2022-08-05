"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
exports.usersCRUD = void 0;
var database_1 = __importDefault(require("./../database"));
var bcrypt = __importStar(require("bcrypt"));
var pepper = process.env.pepper;
// create table users (
//     id SERIAL PRIMARY KEY,
//     fristName varchar(50) NOT NULL,
//     lastName varchar(50) ,
//     password varchar(100) NOT NULL,
// );
var usersCRUD = /** @class */ (function () {
    function usersCRUD() {
    }
    usersCRUD.prototype.index = function () {
        return __awaiter(this, void 0, void 0, function () {
            var conn, q, result, err_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 4, , 5]);
                        conn = database_1.default.connect();
                        q = 'select * from users';
                        return [4 /*yield*/, conn];
                    case 1: return [4 /*yield*/, (_a.sent()).query(q)];
                    case 2:
                        result = _a.sent();
                        return [4 /*yield*/, conn];
                    case 3:
                        (_a.sent()).release();
                        return [2 /*return*/, result.rows];
                    case 4:
                        err_1 = _a.sent();
                        console.log(err_1);
                        throw new Error("".concat(err_1));
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    ////////////////////////////////////////////////////////////////
    usersCRUD.prototype.show = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var sql, conn, result, err_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        sql = 'SELECT * FROM users WHERE id=($1)';
                        return [4 /*yield*/, database_1.default.connect()];
                    case 1:
                        conn = _a.sent();
                        return [4 /*yield*/, conn.query(sql, [id])];
                    case 2:
                        result = _a.sent();
                        conn.release();
                        return [2 /*return*/, result.rows[0]];
                    case 3:
                        err_2 = _a.sent();
                        console.log(err_2);
                        throw new Error("".concat(err_2));
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    usersCRUD.prototype.create = function (fristName, lastName, password) {
        return __awaiter(this, void 0, void 0, function () {
            var conn, q, result, err_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, database_1.default.connect()];
                    case 1:
                        conn = _a.sent();
                        q = " INSERT INTO users (fristName,lastName,password) VALUES ('".concat(fristName, "','").concat(lastName, "','").concat(password, "')");
                        return [4 /*yield*/, conn.query(q)];
                    case 2:
                        result = _a.sent();
                        conn.release();
                        return [2 /*return*/, result.rows];
                    case 3:
                        err_3 = _a.sent();
                        console.log(err_3);
                        throw new Error("".concat(err_3));
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    usersCRUD.prototype.edit = function (id, fristName, lastName, password) {
        return __awaiter(this, void 0, void 0, function () {
            var conn, q, result, err_4;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, database_1.default.connect()];
                    case 1:
                        conn = _a.sent();
                        q = "UPDATE users SET fristName = '".concat(fristName, "', lastName = '").concat(lastName, "',password ='").concat(password, "' WHERE id=").concat(id);
                        return [4 /*yield*/, conn.query(q)];
                    case 2:
                        result = _a.sent();
                        conn.release();
                        return [2 /*return*/, result.rows[0]];
                    case 3:
                        err_4 = _a.sent();
                        console.log(err_4);
                        throw new Error("".concat(err_4));
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    usersCRUD.prototype.delete = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var sql, conn, result, user, err_5;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        sql = 'DELETE FROM users WHERE id=($1)';
                        return [4 /*yield*/, database_1.default.connect()];
                    case 1:
                        conn = _a.sent();
                        return [4 /*yield*/, conn.query(sql, [id])];
                    case 2:
                        result = _a.sent();
                        user = result.rows[0];
                        conn.release();
                        return [2 /*return*/, user];
                    case 3:
                        err_5 = _a.sent();
                        console.log(err_5);
                        throw new Error("".concat(err_5));
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    usersCRUD.prototype.auth = function (id, password) {
        return __awaiter(this, void 0, void 0, function () {
            var sql, conn, result, user, err_6;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        sql = 'SELECT password FROM users WHERE id=($1)';
                        return [4 /*yield*/, database_1.default.connect()];
                    case 1:
                        conn = _a.sent();
                        return [4 /*yield*/, conn.query(sql, [id])];
                    case 2:
                        result = _a.sent();
                        if (result.rowCount > 0) {
                            user = result.rows[0];
                            console.log(user);
                            if (bcrypt.compareSync(password + pepper, user.password)) {
                                return [2 /*return*/, user];
                            }
                        }
                        conn.release();
                        return [2 /*return*/, null];
                    case 3:
                        err_6 = _a.sent();
                        console.log(err_6);
                        throw new Error("".concat(err_6));
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    return usersCRUD;
}());
exports.usersCRUD = usersCRUD;
