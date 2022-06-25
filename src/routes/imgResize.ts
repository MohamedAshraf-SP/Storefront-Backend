import { json } from 'body-parser';
import express from 'express';
import { resize } from '../middlewares/imgMdlwr';

const route = express.Router();

route.get('/', resize, (req, res) => {
  // console.log('\nEnd point started...\n',res.locals.metadata);

  const height: number = parseInt(req.query.height as string);
  const width: number = parseInt(req.query.width as string);

  const obj = {
    height: height,
    width: width,
    path: req.query.path,
    metadata: json(res.locals.metadata),
  };
  //console.log('\nEnd point started...\n',res.locals.metadata);

  res.status(200);
  res.json(Object.assign(obj));

  //console.log('\nEnd point finished...\n',(res.locals.imgDIST));
});

export default route;
