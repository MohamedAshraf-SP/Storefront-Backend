import express from 'express';
import sharp from 'sharp';
import fs from 'fs';
import pth from 'path';

export const getMetaData = async (
  req: express.Request,
  res: express.Response,
  path: string
): Promise<boolean> => {
  try {
    const metadata = await sharp(`assets\\full\\${path}.png`).metadata();
  } catch (error) {
    console.log(`\n--Error occurred during getting meta data: ${error}\n`);
  }
  return true;
};

export const resizeImg = async (
  req: express.Request,
  res: express.Response,
  height: number,
  width: number,
  path: string
): Promise<void> => {
  try {
    const imgSRC = `assets\\full\\${path}.png`;
    const imgDIST = `assets\\thumb\\${path}${width}w-${height}h.png`;

    await sharp(imgSRC)
      .resize({
        height: height,
        width: width,
      })
      .toFile(imgDIST);
  } catch (error) {
    console.log(`Error in resize:\nxxxxxxxxxx\n\n${error}\nxxxxxxxxxx\n\n`);
  }
};

export const checkIfExists = (
  req: express.Request,
  res: express.Response,
  height: number,
  width: number,
  imgSRC: string = `assets\\full\\${req.query.path}.png`
): boolean => {
  console.log('\n--check-');

  if (!fs.existsSync(imgSRC)) {
    console.log('\n-the image exists');
    return true;
  } else {
    console.log('\n-the not image exists');
    return false;
  }
};

export const render = (
  req: express.Request,
  res: express.Response,
  height: number,
  width: number,
  path: string
): void => {
  const imgDir = pth.join(
    __dirname,
    '..',
    '..',
    'assets',
    'thumb',
    `${path}${width}w-${height}h.png`
  );
  console.log('img dir', imgDir);

  console.log('\nfs.existsSync(imgDir)   ', fs.existsSync(imgDir));
  if (fs.existsSync(imgDir)) {
    res.status(200);

    res.sendFile(imgDir);

    console.log('--Image found');
  } else {
    console.log('--Image not found');
    throw new Error('x');
  }
};
// try {
//   resizeImg(req, res, height, width, path);
//   console.log('\n\n-the new image created\n\n');
// }catch (error) {
//   console.log(`\nxxxxxxxxxx\nError in if exist\n\n${error}\nxxxxxxxxxx\n\n`);
//   res.status(400).json(error)
// }
