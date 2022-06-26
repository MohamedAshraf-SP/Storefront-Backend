import express from 'express';
import { getMetaData, checkIfExists } from './functionsOFsharp';

export const resize = async (
  req: express.Request,
  res: express.Response,
  // eslint-disable-next-line @typescript-eslint/ban-types
  next: Function
) => {
  const height: number = parseInt(req.query.height as string);
  const width: number = parseInt(req.query.width as string);
  const path: string = req.query.path as string;

  //get meta data
  const metadata = await getMetaData(req, res, path);
  console.log(metadata);
  //check and resize
  await checkIfExists(req, res, height, width, path);

  //req.query.height  = 21 as unknown as string;
  //console.log('AfterEditing W:', req.query.height , 'H:', width);
  // console.log('\nMdlware finished...\n');
  next();
};
