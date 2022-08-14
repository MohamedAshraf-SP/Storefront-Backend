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
  const result = await crud.index();
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

    const name: String = req.body.name;
    const price: Number = req.body.price;

    const neworder = await crud.create(name, price);

    res.send(neworder);
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

  res.json(edited);
  next();
};

export const deletee = async (
  req: express.Request,
  res: express.Response,
  next: Function
) => {
  const deleted = await crud.delete(req.params.id);
  res.json({ massage: 'deleted' });

  next();
};
