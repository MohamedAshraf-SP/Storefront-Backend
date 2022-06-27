
import express from 'express';
import { resize } from '../middlewares/imgMdlwr';

const route = express.Router();

route.get('/', resize, (req, res) => {
  
 
});

export default route;
