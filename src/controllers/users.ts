import express from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { user, usersCRUD } from '../models/users';
const crud = new usersCRUD();

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
  let result = await crud.index();
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

  //  console.log(x)
  res.json(product);
  //.json(res)
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
    let fristName: String = req.body.fristName;
    let lastName: String = req.body.lastName;
    let password: String = req.body.password;

    let token = jwt.sign(
      { fristName, lastName },
      process.env.JWTsecret as string
    );

    const hash = bcrypt.hashSync(
      req.body.password + process.env.pepper,
      parseInt(process.env.SALTROUNDS as string)
    );

    //     console.log(name,price)

    const neworder = await crud.create(fristName, lastName, hash);

    res.json({ massage: 'created', token: token });
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
  // console.log( req.query.id as String,req.body.name,req.body.price)

  const hash = bcrypt.hashSync(
    req.body.password + process.env.pepper,
    parseInt(process.env.SALTROUNDS as string)
  );
  console.log(hash);

  const edited = await crud.edit(
    req.query.id as String,
    req.body.fristName,
    req.body.lastName,
    hash
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
  try {
    jwt.verify(req.body.token, process.env.JWTsecret as string);
  } catch (error) {
    res.status(401).json({ error: 'invalid token', err: error });
  }
  // console.log ("delete",req)
  const deleted = await crud.delete(req.params.id);
  res.json({ massage: 'deleted' });

  next();
};