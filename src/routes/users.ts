import express from 'express'
import { index, show, create, edit, deletee } from '../controllers/users'

const usersRoute = express.Router()

// usersRoute.get('/', resize, (req: express.Request, res: express.Response): void => {
//   res.status(200);
// });
usersRoute.get('/users', index)

usersRoute.get('/user/:id', show)

usersRoute.post('/user', create)

usersRoute.put('/user', edit)

usersRoute.delete('/user/:id', deletee)

export default usersRoute
