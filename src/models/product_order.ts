import { Console } from 'console';
import client from './../database';
export type product_order = {
  id: Number;
  order_id: String;
  product_id: String;
};

export class product_orderCRUD {
  async index(): Promise<product_order[]> {
    try {
      const conn = client.connect();
      const q =
        'SELECT * FROM products INNER JOIN product_order ON products.id = product_order.product_id;';
      const result = await (await conn).query(q);
      (await conn).release();
      return result.rows;
    } catch (err) {
      console.log(err);
      throw new Error(`${err}`);
    }
  }

  async show(id: String): Promise<product_order[]> {
    try {
      const conn = client.connect();
      // const q = `SELECT * FROM product_order INNER JOIN orders ON orders.id = ${id} where products.id=product_order.product_id;`;

      const q = `SELECT PRODUCTS.* FROM products  JOIN product_order ON   product_order.product_id = products.id   where product_order.order_id = ${id};`;
      // const q = `SELECT * FROM products inner JOIN product_order;`

      const result = (await conn).query(q);
      // console.log((await result).rows)
      (await conn).release();
      return (await result).rows;
    } catch (err) {
      console.log(err);
      throw new Error(`${err}`);
    }
  }

  async create(order_id: String, product_id: String): Promise<product_order[]> {
    try {
      // let date :Date=(`${new Date().getFullYear()}-0${(new Date().getMonth()).toPrecision(1)}-${new Date().getDay()}`as unknown) as Date
      //    const date =(new Date().toISOString().split('T'))[0]
      const date = new Date().toISOString();
      console.log(date);
      const conn = await client.connect();
      const q = ` INSERT INTO product_order (order_id,product_id) VALUES ('${order_id}','${product_id}')`;
      const result = await conn.query(q);
      conn.release();
      return result.rows;
    } catch (err) {
      console.log(err);
      throw new Error(`${err}`);
    }
  }

  //   async edit(id: String,product_id:string,order_id:String): Promise<product_order[]> {
  //     try {
  //       const date = new Date().toISOString();
  //       const conn = await client.connect();
  //       const q = `UPDATE product_order SET  order_id = '${order_id}',product_id ='${product_id}' WHERE id=${id}`;
  //       const result = await conn.query(q);
  //       conn.release();
  //       return result.rows[0];
  //     } catch (err) {
  //       console.log(err);
  //       throw new Error(`${err}`);
  //     }
  //   }
  //   async delete(id: String): Promise<product_order[]> {
  //     try {
  //       const conn = await client.connect();
  //       const q = `delete from product_order where id=${id}`;
  //       const result = await conn.query(q);
  //       conn.release();
  //       return result.rows;
  //     } catch (err) {
  //       console.log(err);
  //       throw new Error(`${err}`);
  //     }
  //   }
}
