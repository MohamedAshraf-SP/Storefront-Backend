import express from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { product_order, product_orderCRUD } from '../models/product_order';
const crud = new product_orderCRUD();

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
    let product_id: String = req.params.pid;
    let order_id: String = req.params.oid;
    
    

    let token = jwt.sign(
      { order_id, product_id },
      process.env.JWTsecret as string
    );

    const hash = bcrypt.hashSync(
      req.body.password + process.env.pepper,
      parseInt(process.env.SALTROUNDS as string)
    );

    //     console.log(name,price)

    const neworder = await crud.create(order_id, product_id);

    res.json({ massage: 'created', token: token });
  } catch (err) {
    res.status(400);
    res.json(err);
  }
  next();
};

// export const edit = async (
//   req: express.Request,
//   res: express.Response,
//   next: Function
// ) => {
//   try {
//     jwt.verify(req.body.token, process.env.JWTsecret as string);
//   } catch (error) {
//     res.status(401).json({ error: 'invalid token', err: error });
//   }
//   // console.log( req.query.id as String,req.body.name,req.body.price)

//   const hash = bcrypt.hashSync(
//     req.body.password + process.env.pepper,
//     parseInt(process.env.SALTROUNDS as string)
//   );
//   console.log(hash);

//   const edited = await crud.edit(
//    req.params.id,
//    req.body.pid,
//    req.body.oid
//   );
//   console.log();
//   res.json({ massage: 'edited' });
//   next();
// };

// export const deletee = async (
//   req: express.Request,
//   res: express.Response,
//   next: Function
// ) => {
//   try {
//     jwt.verify(req.body.token, process.env.JWTsecret as string);
//   } catch (error) {
//     res.status(401).json({ error: 'invalid token', err: error });
//   }
//   // console.log ("delete",req)
//   const deleted = await crud.delete(req.params.id);
//   res.json({ massage: 'deleted' });

//   next();
// };
