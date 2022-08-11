import { Request } from 'express'
import supertest from 'supertest'
import app from '../server'
import { user, usersCRUD } from '../models/users'
const tst = supertest(app)
describe('***My user endpoint checker ***', () => {
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


  it('fetch all users', async function () {
    
   // await userCRUD.create(user)
    const users = await usersCRUD.prototype.index()

  expect(users.length).toBeGreaterThan(0);
});

  it('GET all users', async () => {
    const response = await supertest(app).get('/api/store/users') .send({
        token: `${token}`
      })

    expect(response.status).toBe(200)
  })
  it('SHOW a user', async () => {
    const response = await supertest(app).get('/api/store/user/31').send({
        token: `${token}`
      })

    expect(response.status).toBe(200)
  })
  it('DELETE a user', async () => {
    const response = await supertest(app).get('/api/store/user/32').send({
        token: `${token}`
      })

    expect(response.status).toBe(200)
  })
  it('CREATE the user', async () => {
    const response = await supertest(app)
      .post('/api/store/user')
      .send({
        name: 'ADDE',
        price: 40,
        token: `${token}`
      })
      .set('Accept', 'application/json')
      .set('Content-Type', 'application/json')

    expect(response.status).toBe(200)
  })

  it('EDIT the user', async () => {
    const response = await supertest(app)
      .put('/api/store/user/?id=22')
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
