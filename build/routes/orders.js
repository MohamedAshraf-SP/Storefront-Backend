"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var orders_1 = require("../controllers/orders");
var ordersRoute = express_1.default.Router();
// ordersRoute.get('/', resize, (req: express.Request, res: express.Response): void => {
//   res.status(200);
// });
ordersRoute.get('/orders', orders_1.index);
ordersRoute.get('/order/:id', orders_1.show);
ordersRoute.post('/order', orders_1.create);
ordersRoute.put('/order/:id', orders_1.edit);
ordersRoute.delete('/order/:id', orders_1.deletee);
exports.default = ordersRoute;
