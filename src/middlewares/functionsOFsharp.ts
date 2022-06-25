import express from 'express';
import sharp from 'sharp';
import fs from 'fs';

export const getMetaData = async (
  req: express.Request,
  res: express.Response,
  path: string
) => {
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
) => {
  try {
    const imgSRC = `assets\\full\\${path}.png`;
    const imgDIST = `assets\\thumb\\${path}.png`;

    await sharp(imgSRC)
      .resize({
        height: height,
        width: width,
      })
      .toFile(imgDIST);
    return true;
  } catch (error) {
    console.log(`\n\n\n${error}\n\n\n`);
  }
};

export const checkIfExists = (
  req: express.Request,
  res: express.Response,
  height: number,
  width: number,
  path: string
) => {
  const imgDIST = `assets\\thumb\\${path}.png`;
  console.log('\n\n\n--from check-');

  if (fs.existsSync(imgDIST)) {
    res.locals.imgDIST = imgDIST;
    console.log('\n\n\n-true exist\n\n\n');
  } else {
    resizeImg(req, res, height, width, path);
    console.log('\n\n\n-false exist\n\n\n');
  }
};
