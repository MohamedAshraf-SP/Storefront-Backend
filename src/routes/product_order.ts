import express from 'express';
import { index,show,  create } from '../controllers/product_order';
import {   deletee } from '../controllers/orders';


const product_orderRoute = express.Router();

// product_orderRoute.get('/', resize, (req: express.Request, res: express.Response): void => {
//   res.status(200);
// });
product_orderRoute.get('/productsinorders', index);

product_orderRoute.get('/order/products/:id', show);

product_orderRoute.post('/order/:oid/product/:pid', create);

//product_orderRoute.put('/order/:id', edit);

product_orderRoute.delete('/order/:id', deletee);

export default product_orderRoute;
