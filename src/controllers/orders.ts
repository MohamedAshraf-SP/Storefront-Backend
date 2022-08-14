import express from 'express';
import jwt from 'jsonwebtoken';
import { order, ordersCRUD } from '../models/orders';
const crud = new ordersCRUD();

// const order: order = {
//     id=req.body.id,
//     name=req.body.name,
//     status=req.body.status,
//     date=req.body.date,
//     user_id=req.body.user_id,
//     product_id=req.body.product_id,
// }

export const index = async (
  req: express.Request,
  res: express.Response,
  next: Function
) => {
  try {
    jwt.verify(req.body.token, process.env.JWTsecret as string);
  } catch (error) {
    res.status(401).json({ error: 'invalid token', err: error });
  }
  const result = await crud.index();
  res.send(result);
  next();
};

export const show = async (
  req: express.Request,
  res: express.Response,
  next: Function
) => {
  try {
    jwt.verify(req.body.token, process.env.JWTsecret as string);
  } catch (error) {
    res.status(401).json({ error: 'invalid token', err: error });
  }

  //  res.json(res)
  // const x:string=req.query.id as string
  // req.params.id=x
  const product = await crud.show(req.params.id);

  res.json(product);
  // .json(res)
  next();
};

export const create = async (
  req: express.Request,
  res: express.Response,
  next: Function
) => {
  try {
    jwt.verify(req.body.token, process.env.JWTsecret as string);
  } catch (error) {
    res.status(401).json({ error: 'invalid token', err: error });
  }
  try {
    const name: String = req.body.name;
    const status: String = req.body.status;
    //  let date:String=req.body.date
    const user_id: String = req.body.user_id;
    const product_id: String = req.body.product_id;

    const neworder = await crud.create(name, status, user_id, product_id);

    res.json(neworder);
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

  const name: String = req.body.name;
  const status: String = req.body.status;
  //  let date:String=req.body.date
  // let user_id:String=req.body.user_id
  // let product_id:String=req.body.product_id
  const edited = await crud.edit(req.params.id, name, status);

  res.json(edited);
  next();
};

export const deletee = async (
  req: express.Request,
  res: express.Response,
  next: Function
) => {
  try {
    jwt.verify(req.body.token, process.env.JWTsecret as string);
  } catch (error) {
    res.status(401).json({ error: 'invalid token', err: error });
  }

  const deleted = await crud.delete(req.params.id);
  res.json(deleted);

  next();
};
