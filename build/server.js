"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//libs
var express_1 = __importDefault(require("express"));
var morgan_1 = __importDefault(require("morgan"));
var products_1 = __importDefault(require("./routes/products"));
var users_1 = __importDefault(require("./routes/users"));
var orders_1 = __importDefault(require("./routes/orders"));
var auth_1 = __importDefault(require("./routes/auth"));
var body_parser_1 = __importDefault(require("body-parser"));
var cors_1 = __importDefault(require("cors"));
//declaring app
var app = (0, express_1.default)();
var port = process.env.PORT || 3000;
//middlewares database
//app.use(bodyParser.urlencoded({ extended: true }))
app.use(body_parser_1.default.json());
app.use((0, cors_1.default)());
//app.use(cors)
app.use((0, morgan_1.default)('dev'));
//app.use(morgan("common"))
app.use('/api/store/', products_1.default);
app.use('/api/store/', users_1.default);
app.use('/api/store/', orders_1.default);
app.use('/api/store/', auth_1.default);
// server listening
app.listen(port, function () {
    console.log("this is my server running on PORT: ".concat(port, " "));
});
//
//app.use (bodyParser)
//app.use(express.urlencoded({extended:false}));
exports.default = app;
