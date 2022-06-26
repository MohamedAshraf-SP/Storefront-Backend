import express from 'express';
import { resize } from '../middlewares/imgMdlwr';

const route = express.Router();

route.get('/', resize, async (req, res): Promise<void> => {
  // console.log('\nEnd point started...\n',res.locals.metadata);

  const height: number = parseInt(req.query.height as string);
  const width: number = parseInt(req.query.width as string);

  const src = `C:\\Users\\Mahmoud\\Desktop\\FristProject\\assets\\thumb\\${req.query.path}${width}w-${height}h.png`;

  res.status(200);

  res.sendFile(src);

  //console.log('\nEnd point finished...\n',(res.locals.imgDIST));
});

export default route;
