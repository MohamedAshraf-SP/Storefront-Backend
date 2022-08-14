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
Object.defineProperty(exports, "__esModule", { value: true });
var orders_1 = require("../models/orders");
var crud = new orders_1.ordersCRUD();
describe('***orders functions test***', function () {
    var store = new orders_1.ordersCRUD();
    var order = {
        id: undefined,
        name: "Legion Laptop",
        status: "delivered",
        user_id: 11
    };
    describe('test order model methods', function () {
        it('fetch all orders', function () {
            return __awaiter(this, void 0, void 0, function () {
                var order, orders;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            order = {
                                id: undefined,
                                name: "Legion Laptop",
                                status: "delivered",
                                user_id: 11
                            };
                            return [4 /*yield*/, store.create(order.name, order.status, order.user_id, "166")];
                        case 1:
                            _a.sent();
                            return [4 /*yield*/, store.index()];
                        case 2:
                            orders = _a.sent();
                            expect(orders.length).toBeGreaterThan(0);
                            return [2 /*return*/];
                    }
                });
            });
        });
    });
    it('--index is not null ', function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            expect(crud.index).not.toBeNull();
            return [2 /*return*/];
        });
    }); });
    it('--show is not false ', function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            expect(crud.show).not.toBeFalse();
            return [2 /*return*/];
        });
    }); });
    it('--create is working ', function () { return __awaiter(void 0, void 0, void 0, function () {
        var order, res;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    order = {
                        id: undefined,
                        name: "Legion Laptop",
                        status: "delivered",
                        user_id: 11
                    };
                    return [4 /*yield*/, store.create(order.name, order.status, order.user_id, "166")];
                case 1:
                    res = _a.sent();
                    expect(res).toEqual({ "name": "Legion Laptop", "status": "delivered" });
                    return [2 /*return*/];
            }
        });
    }); });
    it('--edit is not equal "1" ', function () { return __awaiter(void 0, void 0, void 0, function () {
        var order, res;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    order = {
                        id: undefined,
                        name: "Legion Laptop",
                        status: "delivered",
                        user_id: 11
                    };
                    return [4 /*yield*/, store.edit(order.user_id, order.name, order.status)];
                case 1:
                    res = _a.sent();
                    expect(res).toEqual({ "name": "Legion Laptop", "status": "delivered" });
                    return [2 /*return*/];
            }
        });
    }); });
    it('--delete is defined ', function () { return __awaiter(void 0, void 0, void 0, function () {
        var res;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, store.create(order.name, order.status, order.user_id, "166")];
                case 1:
                    res = _a.sent();
                    expect(crud.delete("166")).toBeTruthy();
                    return [2 /*return*/];
            }
        });
    }); });
    // it('--delete not throw error ', async () => {
    //   expect(crud.delete).not.toThrow(new Error());
});