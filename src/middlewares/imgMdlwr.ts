import express, { Response } from 'express';
import {
  getMetaData,
  checkIfExists,
  render,
  resizeImg,
} from './functionsOFsharp';

export const resize = async (
  req: express.Request,
  res: express.Response,
  // eslint-disable-next-line @typescript-eslint/ban-types
  next: Function
) => {
  let height: number = req.query.height as unknown as number;
  let width: number = req.query.width as unknown as number;
  const path: string = req.query.path as string;
  console.log(height, path, width);

  if (
    path === undefined ||
    null ||
    width === undefined ||
    null ||
    height === undefined ||
    null
  ) {
    return res
      .status(400)
      .send(`<h1>Error:: Bad request, all query parameter are required.</h1>`);
  } else if (isNaN(width) || isNaN(height)) {
    return res
      .status(400)
      .send(
        `<h1><i>Error::</i> Bad request, query parameter are not valid.</h1>`
      );
  } else if (checkIfExists(req, res, height, width, path)) {
    height = parseInt(req.query.height as string);
    width = parseInt(req.query.width as string);

    //get meta data
    const metadata = getMetaData(req, res, path);
    console.log(metadata);

    //check and resize
    try {
      await resizeImg(req, res, height, width, path);
      render(req, res, height, width, path);
    } catch (error) {
      return res
        .status(400)
        .send(
          `<h1><b>Error::</i> in img processing may be file with this name not found</h1>`
        );
    }
  }
  // else{
  //   return res.status(404)
  //     .send(`<h1>There is no img to be processed with this name in the full directoury</h1>`);

  // }

  //req.query.height  = 21 as unknown as string;
  //console.log(`<h1>AfterEditing W:`<h1>, req.query.height , `<h1>H:`<h1>, width);
  // console.log(`<h1>\nMdlware finished...\n`<h1>);
  next();
};
