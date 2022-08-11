"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var product_order_1 = require("../controllers/product_order");
var orders_1 = require("../controllers/orders");
var product_orderRoute = express_1.default.Router();
// product_orderRoute.get('/', resize, (req: express.Request, res: express.Response): void => {
//   res.status(200);
// });
product_orderRoute.get('/productsinorders', product_order_1.index);
product_orderRoute.get('/order/products/:id', product_order_1.show);
product_orderRoute.post('/order/:oid/product/:pid', product_order_1.create);
// product_orderRoute.put('/order/:id', edit);
product_orderRoute.delete('/order/:id', orders_1.deletee);
exports.default = product_orderRoute;
