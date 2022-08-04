"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var users_1 = require("../controllers/users");
var usersRoute = express_1.default.Router();
// usersRoute.get('/', resize, (req: express.Request, res: express.Response): void => {
//   res.status(200);
// });
usersRoute.get('/users', users_1.index);
usersRoute.get('/user/:id', users_1.show);
usersRoute.post('/user', users_1.create);
usersRoute.put('/user', users_1.edit);
usersRoute.delete('/user/:id', users_1.deletee);
exports.default = usersRoute;
