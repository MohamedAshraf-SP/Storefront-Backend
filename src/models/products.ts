import client from './../database'
import jwt from 'jsonwebtoken'

export type product = {
  id: Number;
  name: String;
  price: Number;
};

export class productCRUD {
  async index (): Promise<product[]> {
    try {
      const conn = client.connect()
      const q = 'select * from products'
      const result = (await conn).query(q);
      (await conn).release()
      return (await result).rows
    } catch (err) {
      console.log(err)
      throw new Error(`${err}`)
    }
  }

  async show (id: string): Promise<product> {
    try {
      // const conn= client.connect()
      // const q=`delete from users where id=${id}`
      // const result=  (await conn).query(q);
      // (await conn).release()
      // return (await result).rows

      const sql = 'SELECT * FROM products WHERE id=($1)'
      // @ts-ignore
      const conn = await client.connect()

      const result = await conn.query(sql, [id])

      conn.release()

      return result.rows[0]

      // const conn= await client.connect()
      // const q=`select * from products where id=${id}`
      // const result=  await conn.query(q);
      //  conn.release()
      // return result.rows[0]
    } catch (err) {
      console.log(err)
      throw new Error(`${err}`)
    }
  }

  async create (name: String, price: Number): Promise<product[]> {
    try {
      const conn = client.connect()
      const connection = client.connect()

      // const q=`insert into products values(${product.id},${product.name},${product.price})`
      // const q=` insert into products (name,price) values (${name},${price});`
      const q = ` INSERT INTO products (name,price) VALUES ('${name}',${price})`

      // INSERT INTO products (name,price) VALUES (34,34);
      const result = (await conn).query(q);
      (await conn).release()
      return (await result).rows
    } catch (err) {
      console.log(err)
      throw new Error(`${err}`)
    }
  }

  async edit (id: String, name: String, price: Number): Promise<product> {
    try {
      const conn = await client.connect()
      //    const q=` INSERT INTO products (name,price) VALUES ('${name}',${price})`
      //  UPDATE products SET name = '${name}', price = ${price} WHERE id=${id};

      const q = `UPDATE products SET name = '${name}', price = ${price} WHERE id=${id};
`
      const result = await conn.query(q)
      conn.release()
      return result.rows[0]
    } catch (err) {
      console.log(err)
      throw new Error(`${err}`)
    }
  }

  async delete (id: String): Promise<product[]> {
    try {
      const sql = 'DELETE FROM products WHERE id=($1)'
      // @ts-ignore
      const conn = await client.connect()

      const result = await conn.query(sql, [id])

      const product = result.rows[0]

      conn.release()
      // const conn= client.connect()
      // //const q=`delete from  where id=${id}`
      // const result=  (await conn).query(q);
      // (await conn).release()
      // return (await result).rows
      return product
    } catch (err) {
      console.log(err)
      throw new Error(`${err}`)
    }
  }
}
