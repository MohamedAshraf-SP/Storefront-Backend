import express from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { user, usersCRUD } from '../models/users';
import { token } from 'morgan';
const crud = new usersCRUD();

export const auth = async (
  req: express.Request,
  res: express.Response,
  next: Function
) => {
  // auth removed as mentioned in reviwe

  // const password = req.body.password;
  // console.log(password);

  // const product = await crud.auth(req.params.id, password);

  // if (product) {
  //   let token = jwt.sign(req.params.id, process.env.JWTsecret as string);
  //   res.json(token);
  // }

  res.json(null);
  // res.json({"massage":"authed"})
  // .json(res)
  next();
};
