import express from 'express';
import { resize } from '../middlewares/imgMdlwr';

const route = express.Router();

route.get('/', resize, (req:express.Request, res:express.Response):void => {
    res.status(200)
});

export default route;
