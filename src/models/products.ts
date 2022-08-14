import client from './../database';
import jwt from 'jsonwebtoken';

export type product = {
  id: Number;
  name: String;
  price: Number;
};

export class productCRUD {
  async index(): Promise<product[]> {
    try {
      const conn = await client.connect();
      const q = 'select * from products;';
      const result = conn.query(q);
      conn.release();
      return (await result).rows;
    } catch (err) {
      console.log(err);
      throw new Error(`${err}`);
    }
  }

  async show(id: string): Promise<product> {
    try {
      const sql = 'SELECT * FROM products WHERE id=($1)';
      const conn = await client.connect();

      const result = await conn.query(sql, [id]);

      conn.release();

      return result.rows[0];
    } catch (err) {
      console.log(err);
      throw new Error(`${err}`);
    }
  }

  async create(name: String, price: Number): Promise<Object> {
    try {
      const conn = await client.connect();
      const connection = client.connect();

      const q = ` INSERT INTO products (name,price) VALUES ('${name}',${price}) RETURNING name,price;`;

      const result = await conn.query(q);
      console.log(result.rows[0]);
      conn.release();
      return result.rows[0];
    } catch (err) {
      console.log(err);
      throw new Error(`${err}`);
    }
  }

  async edit(id: String, name: String, price: Number): Promise<Object> {
    try {
      const conn = await client.connect();
      const q = `UPDATE products SET name = '${name}', price = ${price} WHERE id=${id} RETURNING name,price;`;
      const result = await conn.query(q);
      conn.release();
      return result.rows[0];
    } catch (err) {
      console.log(err);
      throw new Error(`${err}`);
    }
  }

  async delete(id: String): Promise<product[]> {
    try {
      const sql = 'DELETE FROM products WHERE id=($1) RETURNING *';
      // @ts-ignore
      const conn = await client.connect();

      const result = await conn.query(sql, [id]);

      const product = result.rows[0];

      conn.release();

      return product;
    } catch (err) {
      console.log(err);
      throw new Error(`${err}`);
    }
  }
}
