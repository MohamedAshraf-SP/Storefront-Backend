import express from 'express';
import { index, show, create, edit, deletee } from '../controllers/product';

const productsRoute = express.Router();

// productsRoute.get('/', resize, (req: express.Request, res: express.Response): void => {
//   res.status(200);
// });
productsRoute.get('/products', index);

productsRoute.get('/product/:id', show);

productsRoute.post('/product', create);

productsRoute.put('/product', edit);

productsRoute.delete('/product/:id', deletee);

export default productsRoute;
