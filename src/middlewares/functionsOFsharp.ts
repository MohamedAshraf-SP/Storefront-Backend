import express from 'express';
import sharp from 'sharp';
import fs from 'fs';

export const getMetaData = async (
  req: express.Request,
  res: express.Response,
  path: string
): Promise<boolean> => {
  try {
    const metadata = await sharp(`assets\\full\\${path}.png`).metadata();
    console.log(metadata);
    res.locals.metadata = metadata;
    //res.send(metadata)
  } catch (error) {
    console.log(
      `\n\n\n ---An error occurred during getting meta data: ${error}\n\n\n`
    );
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
    console.log(imgDIST);
    await sharp(imgSRC)
      .resize({
        height: height,
        width: width,
      })
      .toFile(imgDIST);
  } catch (error) {
    console.log(`\nxxxxxxxxx\n\n${error}\nxxxxxxxxxx\n\n`);
  }
};

export const checkIfExists = async (
  req: express.Request,
  res: express.Response,
  height: number,
  width: number,
  path: string
): Promise<void> => {
  try {
    const imgDIST = `assets\\thumb\\${path}${width}w-${height}h.png`;
    console.log('\n\n\n--from check-');

    if (fs.existsSync(imgDIST)) {
      res.locals.imgDIST = imgDIST;
      console.log('\n\n\n-the image exists\n\n\n');
    } else {
      await resizeImg(req, res, height, width, path);
      console.log('\n\n\n-the new image created\n\n\n');
    }
  } catch (error) {
    console.log(`\nxxxxerr in if existxxxxx\n\n${error}\nxxxxxxxxxx\n\n`);
  }
};
