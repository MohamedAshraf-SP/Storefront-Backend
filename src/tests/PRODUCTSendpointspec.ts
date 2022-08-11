import { Request } from 'express'
import supertest from 'supertest'
import app from '../server'
import { product, productCRUD } from '../models/products'
const tst = supertest(app)
describe('***My product endpoint checker ***', () => {
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

  it('GET all products', async () => {
    const response = await supertest(app).get('/api/store/products')

    expect(response.status).toBe(200)
  })
  it('SHOW a product', async () => {
    const response = await supertest(app).get('/api/store/product/31')

    expect(response.status).toBe(200)
  })
  it('DELETE a product', async () => {
    const response = await supertest(app).get('/api/store/product/32')

    expect(response.status).toBe(200)
  })
  it('CREATE the product', async () => {
    const response = await supertest(app)
      .post('/api/store/product')
      .send({
        name: 'ADDE',
        price: 40,
        token: `${token}`
      })
      .set('Accept', 'application/json')
      .set('Content-Type', 'application/json')

    expect(response.status).toBe(200)
  })

  it('EDIT the product', async () => {
    const response = await supertest(app)
      .put('/api/store/product/?id=22')
      .send({
        name: 'ADDE',
        price: 40,
        token: `${token}`
      })
      .set('Accept', 'application/json')
      .set('Content-Type', 'application/json')

    expect(response.status).toBe(200)
  })
})
