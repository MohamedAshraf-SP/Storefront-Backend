"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//libs
var express_1 = __importDefault(require("express"));
var morgan_1 = __importDefault(require("morgan"));
var imgResize_1 = __importDefault(require("./routes/imgResize"));
//import cors from 'cors'
//declaring app
var app = (0, express_1.default)();
var port = 3000;
//middlewares
//app.use(cors)
app.use((0, morgan_1.default)('dev'));
//app.use(morgan("common"))
app.use('/api/image/', imgResize_1.default);
// server listening
app.listen(port, function () {
    console.log('this is my server running on PORT: ');
});
//
//app.use (bodyParser)
//app.use(express.urlencoded({extended:false}));
exports.default = app;
