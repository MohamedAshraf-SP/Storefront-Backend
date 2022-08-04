"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var product_1 = require("../controllers/product");
var productsRoute = express_1.default.Router();
// productsRoute.get('/', resize, (req: express.Request, res: express.Response): void => {
//   res.status(200);
// });
productsRoute.get('/products', product_1.index);
productsRoute.get('/product/:id', product_1.show);
productsRoute.post('/product', product_1.create);
productsRoute.put('/product', product_1.edit);
productsRoute.delete('/product/:id', product_1.deletee);
exports.default = productsRoute;
