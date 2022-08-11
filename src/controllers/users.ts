import express from 'express'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { user, usersCRUD } from '../models/users'

const crud = new usersCRUD()

export const index = async (
  req: express.Request,
  res: express.Response,
  next: Function
) => {
  try {
    jwt.verify(req.body.token, process.env.JWTsecret as string)
  } catch (error) {
    res.status(401).json({ error: 'invalid token', err: error })
  }
  const result = await crud.index()
  res.send(result)
  next()
}

export const show = async (
  req: express.Request,
  res: express.Response,
  next: Function
) => {
  try {
    jwt.verify(req.body.token, process.env.JWTsecret as string)
  } catch (error) {
    res.status(401).json({ error: 'invalid token', err: error })
  }

  //  res.json(res)
  // const x:string=req.query.id as string
  // req.params.id=x
  const product = await crud.show(req.params.id)


  res.json(product)
  // .json(res)
  next()
}

export const create = async (
  req: express.Request,
  res: express.Response,
  next: Function
) => {
  try {
    const fristName: String = req.body.fristName
    const lastName: String = req.body.lastName
    const password: String = req.body.password

    const token = jwt.sign(
      { fristName, lastName },
      process.env.JWTsecret as string
    )

    const hash = bcrypt.hashSync(
      req.body.password + process.env.pepper,
      parseInt(process.env.SALTROUNDS as string)
    )


    const neworder = await crud.create(fristName, lastName, hash)

    res.json({ massage: 'created', token })
  } catch (err) {
    res.status(400)
    res.json(err)
  }
  next()
}

export const edit = async (
  req: express.Request,
  res: express.Response,
  next: Function
) => {
  try {
    jwt.verify(req.body.token, process.env.JWTsecret as string)
  } catch (error) {
    res.status(401).json({ error: 'invalid token', err: error })
  }

  const hash = bcrypt.hashSync(
    req.body.password + process.env.pepper,
    parseInt(process.env.SALTROUNDS as string)
  )

  const edited = await crud.edit(
    req.query.id as String,
    req.body.fristName,
    req.body.lastName,
    hash
  )
  res.json({ massage: 'edited' })
  next()
}

export const deletee = async (
  req: express.Request,
  res: express.Response,
  next: Function
) => {
  try {
    jwt.verify(req.body.token, process.env.JWTsecret as string)
  } catch (error) {
    res.status(401).json({ error: 'invalid token', err: error })
  }
  const deleted = await crud.delete(req.params.id)
  res.json({ massage: 'deleted' })

  next()
}
