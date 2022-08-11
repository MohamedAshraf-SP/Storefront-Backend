import { Request } from 'express'
import supertest from 'supertest'
import app from '../server'
import jwt from 'jsonwebtoken'
import { order, ordersCRUD } from '../models/orders'
// import { token } from 'morgan';
import { request } from 'http'

const tst = supertest(app)
describe('***My order endpoint checker ***', () => {
  let token: string
  beforeAll(async () => {
    const res = await supertest(app)
      .post('/api/store/user')
      .set('Accept', 'application/json')
      .set('Content-Type', 'application/json')
      .send({
        fristName: 'mohamed',
        lastName: 'mohamed',
        password: 'mo'
      })

    token = res.body.token
  })
  it('fetch all orders', async function () {
    // const order: order = {
    //     id: null as unknown as Number,
    //     name: "Legion Laptop",
    //     status: "DELIVERED"
        
    // }
   //await ordersCRUD.prototype.create({...order})
    const products = await ordersCRUD.prototype.index()

  expect(products.length).toBeGreaterThan(0);
});
  it('GET all orders', async () => {
    const response = await supertest(app)
      .get('/api/store/orders')
      .set('Accept', 'application/json')
      .set('Content-Type', 'application/json')
      .send({
        token: `${token as string}`
      })

    expect(response.status).toBe(200)
  })
  it('SHOW a order', async () => {
    const response = await supertest(app)
      .get('/api/store/order/2')
      //.set('Accept', 'application/json')
      //.set('Content-Type', 'application/json')
      .send({
        token: `${token as string}`,
      });
    expect(response.status).toBe(200);
  });
  it('DELETE a order', async () => {
    const response = await supertest(app)
      .get('/api/store/order/2')
     // .set('Accept', 'application/json')
      //.set('Content-Type', 'application/json')
      .send({
        token: `${token as string}`,
      });

    expect(response.status).toBe(200);
  });

  it('SHOW a order', async () => {
    const response = await supertest(app).get('/api/store/order/31').send({
      token: `${token as string}`
    })
    .set('Accept', 'application/json')
    .set('Content-Type', 'application/json')
;

    expect(response.status).toBe(200);
  });
  it('DELETE a order', async () => {
    const response = await supertest(app).get('/api/store/order/32').send({
      token: `${token as string}`
    })
    .set('Accept', 'application/json')
    .set('Content-Type', 'application/json')
;

    expect(response.status).toBe(200);
  });

  it('CREATE the order', async () => {
    const response = await supertest(app)
      .post('/api/store/order')
      .send({
        name: 'String',
        status: 'String',
        user_id: 4,
        token: `${token as string}`
      })
      .set('Accept', 'application/json')
      .set('Content-Type', 'application/json')

    expect(response.status).toBe(200)
    // .log(response)
  })

  it('EDIT the order', async () => {
    const response = await supertest(app)
      .put('/api/store/order/3')
      .send({
        name: 'order20',
        status: 'delivered',
        token: `${token as string}`
      })
      .set('Accept', 'application/json')
      .set('Content-Type', 'application/json')

    // eslint-disable-next-line no-undef
    expect(response.status).toBe(200)
    // .log(response)
  })
})
