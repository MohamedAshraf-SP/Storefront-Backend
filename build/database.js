"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var dotenv_1 = __importDefault(require("dotenv"));
var pg_1 = require("pg");
dotenv_1.default.config();
var _a = process.env, PG_HOST = _a.PG_HOST, PG_DB = _a.PG_DB, PG_DB_test = _a.PG_DB_test, PG_USER = _a.PG_USER, PG_PASSWORD = _a.PG_PASSWORD, ENV = _a.ENV;
var cli;
if (ENV === 'dev') {
    cli = new pg_1.Pool({
        host: PG_HOST,
        database: PG_DB,
        user: PG_USER,
        password: PG_PASSWORD,
    });
}
else if (ENV === 'test') {
    cli = new pg_1.Pool({
        host: PG_HOST,
        database: PG_DB_test,
        user: PG_USER,
        password: PG_PASSWORD,
    });
}
else {
    cli = new pg_1.Pool({
        host: PG_HOST,
        database: PG_DB_test,
        user: PG_USER,
        password: PG_PASSWORD,
    });
}
cli.connect(function (err) {
    if (err)
        throw err;
    console.log('Connected!');
});
var client = cli;
exports.default = client;
