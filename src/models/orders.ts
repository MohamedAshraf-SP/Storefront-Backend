import client from './../database';
export type order = {
  id: Number;
  name: String;
  status: String;
  date: Date;
  user_id: String;
};

export class ordersCRUD {
  async index(): Promise<order[]> {
    try {
      const conn = client.connect();
      const q = 'select * from orders';
      const result = await (await conn).query(q);
      (await conn).release();
      return result.rows;
    } catch (err) {
      //console.log(err)
      throw new Error(`${err}`);
    }
  }

  async show(id: String): Promise<order> {
    try {
      const conn = client.connect();
      const q = `select * from orders where id=${id}`;
      const result = (await conn).query(q);
      (await conn).release();
      return (await result).rows[0];
    } catch (err) {
      //console.log(err)
      throw new Error(`${err}`);
    }
  }

  async create(
    name: String,
    status: String,
    user_id: String,
    product_id: String
  ): Promise<object> {
    try {
      // let date :Date=(`${new Date().getFullYear()}-0${(new Date().getMonth()).toPrecision(1)}-${new Date().getDay()}`as unknown) as Date
      //    const date =(new Date().toISOString().split('T'))[0]
      const date = new Date().toISOString();

      const conn = await client.connect();
      const q = ` INSERT INTO orders (name,status,date,user_id) VALUES ('${name}','${status}','${date}',${user_id}) RETURNING name,status`;
      const result = await conn.query(q);
      conn.release();
      return result.rows[0];
    } catch (err) {
      //console.log(err)
      throw new Error(`${err}`);
    }
  }

  async edit(id: String, name: String, status: String): Promise<object> {
    try {
      const date = new Date().toISOString();
      const conn = await client.connect();
      const q = `UPDATE orders SET name = '${name}', status = '${status}',date ='${date}' WHERE id=${id} RETURNING name,status`;
      const result = await conn.query(q);
      conn.release();
      return result.rows[0];
    } catch (err) {
      //console.log(err)
      throw new Error(`${err}`);
    }
  }

  async delete(id: String): Promise<object> {
    try {
      const conn = await client.connect();
      const q = `delete from orders where id=${id} RETURNING *`;
      const result = await conn.query(q);
      conn.release();
      return result.rows[0];
    } catch (err) {
      //console.log(err)
      throw new Error(`${err}`);
    }
  }
}
