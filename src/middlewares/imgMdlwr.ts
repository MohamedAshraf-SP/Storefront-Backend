import express from 'express';
import { getMetaData, checkIfExists,render,resizeImg } from './functionsOFsharp';

export const resize = async (
  req: express.Request,
  res: express.Response,
  // eslint-disable-next-line @typescript-eslint/ban-types
  next : Function
) => {
  const height: number = parseInt(req.query.height as string);
  const width: number = parseInt(req.query.width as string);
  const path: string = req.query.path as string;
  console.log( height,path,width)

  //get meta data
  const metadata = getMetaData(req, res, path);
  console.log(metadata);

  //check and resize
try{
  console.log( checkIfExists(req, res, height, width, path))

 if( checkIfExists(req, res, height, width, path)){

  await resizeImg(req, res, height, width, path)

   await  render(req, res, height, width, path)
 }else{
  throw new Error("--*************Img does not exist************")  
 }
}catch(error){
  res.status(404).json("error img mdlware")
}










  //req.query.height  = 21 as unknown as string;
  //console.log('AfterEditing W:', req.query.height , 'H:', width);
  // console.log('\nMdlware finished...\n');
  next();
};
