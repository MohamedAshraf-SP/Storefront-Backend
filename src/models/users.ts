import client from './../database'
import jwt from 'jsonwebtoken'
import * as bcrypt from 'bcrypt'
import { env } from 'process'
export type user = {
  id: Number;
  fristName: String;
  lastName: String;
  password: String;
};

const pepper = process.env.pepper as string

// create table users (
//     id SERIAL PRIMARY KEY,
//     fristName varchar(50) NOT NULL,
//     lastName varchar(50) ,
//     password varchar(100) NOT NULL,
// );

export class usersCRUD {
  async index (): Promise<user[]> {
    try {
      const conn = client.connect()
      const q = 'select * from users'
      const result = await (await conn).query(q);
      (await conn).release()
      return result.rows
    } catch (err) {
      console.log(err)
      throw new Error(`${err}`)
    }
  }

  /// /////////////////////////////////////////////////////////////

  async show (id: string): Promise<user> {
    try {
      const sql = 'SELECT * FROM users WHERE id=($1)'
      // @ts-ignore
      const conn = await client.connect()

      const result = await conn.query(sql, [id])

      conn.release()

      return result.rows[0]
    } catch (err) {
      console.log(err)
      throw new Error(`${err}`)
    }
  }

  async create (
    fristName: String,
    lastName: String,
    password: String
  ): Promise<user[]> {
    try {
      const conn = await client.connect()

      const q = ` INSERT INTO users (fristName,lastName,password) VALUES ('${fristName}','${lastName}','${password}')`
      const result = await conn.query(q)
      conn.release()
      return result.rows
    } catch (err) {
      console.log(err)
      throw new Error(`${err}`)
    }
  }

  async edit (
    id: String,
    fristName: String,
    lastName: String,
    password: String
  ): Promise<user> {
    try {
      const conn = await client.connect()
      const q = `UPDATE users SET fristName = '${fristName}', lastName = '${lastName}',password ='${password}' WHERE id=${id}`
      const result = await conn.query(q)
      conn.release()
      return result.rows[0]
    } catch (err) {
      console.log(err)
      throw new Error(`${err}`)
    }
  }

  async delete (id: string): Promise<user[]> {
    try {
      const sql = 'DELETE FROM users WHERE id=($1)'
      // @ts-ignore
      const conn = await client.connect()

      const result = await conn.query(sql, [id])

      const user = result.rows[0]

      conn.release()

      return user
    } catch (err) {
      console.log(err)
      throw new Error(`${err}`)
    }
  }

  async auth (id: string, password: String | Buffer): Promise<user | null> {
    try {
      const sql = 'SELECT password FROM users WHERE id=($1)'
      // @ts-ignore
      const conn = await client.connect()

      const result = await conn.query(sql, [id])

      if (result.rowCount > 0) {
        const user = result.rows[0]
        console.log(user)

        if (bcrypt.compareSync(password + pepper, user.password)) {
          return user
        }
      }

      conn.release()

      return null
    } catch (err) {
      console.log(err)
      throw new Error(`${err}`)
    }
  }
}
