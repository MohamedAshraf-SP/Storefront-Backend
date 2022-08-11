import { json } from 'body-parser';
import express from 'express';
import jwt from 'jsonwebtoken';
import { product, productCRUD } from '../models/products';
const crud = new productCRUD();

export const index = async (
  req: express.Request,
  res: express.Response,
  next: Function
) => {
  let result = await crud.index();
  res.send(result);
  next();
};

export const show = async (
  req: express.Request,
  res: express.Response,
  next: Function
) => {
  // const x:string=req.query.id as string
  // req.params.id=x
  const product = await crud.show(req.params.id);

  //console.log(x)
  res.json(product);
  next();
};

export const create = async (
  req: express.Request,
  res: express.Response,
  next: Function
) => {
  try {
    try {
      jwt.verify(req.body.token, process.env.JWTsecret as string);
    } catch (error) {
      res.status(401).json({ error: 'invalid token', err: error });
    }

    let name: String = req.body.name;
    let price: Number = req.body.price;

    //     console.log(name,price)

    const neworder = await crud.create(name, price);

    res.json({ massage: 'created' });
  } catch (err) {
    res.status(400);
    res.json(err);
  }
  next();
};

export const edit = async (
  req: express.Request,
  res: express.Response,
  next: Function
) => {
  // console.log( req.query.id as String,req.body.name,req.body.price)

  try {
    jwt.verify(req.body.token, process.env.JWTsecret as string);
  } catch (error) {
    res.status(401).json({ error: 'invalid token', err: error });
  }

  const edited = await crud.edit(
    req.query.id as String,
    req.body.name,
    req.body.price
  );
  console.log();
  res.json({ massage: 'edited' });
  next();
};

export const deletee = async (
  req: express.Request,
  res: express.Response,
  next: Function
) => {
  console.log('delete');
  const deleted = await crud.delete(req.params.id);
  res.json({ massage: 'deleted' });

  next();
};
