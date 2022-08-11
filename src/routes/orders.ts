import express from 'express'
import { index, show, create, edit, deletee } from '../controllers/orders'

const ordersRoute = express.Router()

// ordersRoute.get('/', resize, (req: express.Request, res: express.Response): void => {
//   res.status(200);
// });
ordersRoute.get('/orders', index)

ordersRoute.get('/order/:id', show)

ordersRoute.post('/order', create)

ordersRoute.put('/order/:id', edit)

ordersRoute.delete('/order/:id', deletee)

export default ordersRoute
