import {Request} from 'express';
import supertest from 'supertest';
import app from '../server';
import {order, ordersCRUD} from '../models/orders'
const tst =supertest(app);
describe('***My order endpoint checker ***', () => {

    it("GET all orders", async () => {
        const response = await supertest(app).get("/api/store/orders").send({
          "token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmcmlzdE5hbWUiOiJtb3MiLCJsYXN0TmFtZSI6Im1vcyIsImlhdCI6MTY1OTYyNzQ0OX0.u2C7_tvbAHTKMde_oBw0VnXrgCLy7GchK9BmB5mK-64"
      });
      
        expect(response.status).toBe(200);
       
        
      });
    it("SHOW a order", async () => {
        const response = await supertest(app).get("/api/store/order/2").send({
          "token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmcmlzdE5hbWUiOiJtb3MiLCJsYXN0TmFtZSI6Im1vcyIsImlhdCI6MTY1OTYyNzQ0OX0.u2C7_tvbAHTKMde_oBw0VnXrgCLy7GchK9BmB5mK-64"
      });
        expect(response.status).toBe(200);
       
        
      });
    it("DELETE a order", async () => {
        const response = await supertest(app).get("/api/store/order/2").send({
          "token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmcmlzdE5hbWUiOiJtb3MiLCJsYXN0TmFtZSI6Im1vcyIsImlhdCI6MTY1OTYyNzQ0OX0.u2C7_tvbAHTKMde_oBw0VnXrgCLy7GchK9BmB5mK-64"
      });
      
       expect(response.status).toBe(200);
       
        
     });
    // it("CREATE the order", async () => {
    //     const response = await supertest(app).post("/api/store/order").send({
    //       "name":"order0",
    //       "status":"created from test",
    //       "token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmcmlzdE5hbWUiOiJtb3MiLCJsYXN0TmFtZSI6Im1vcyIsImlhdCI6MTY1OTYyNzQ0OX0.u2C7_tvbAHTKMde_oBw0VnXrgCLy7GchK9BmB5mK-64"
    //   }).set('Accept','application/json').set("Content-Type","application/json")

      
    //     expect(response.status).toBe(200);
    //     //.log(response)
        
    //   });

    //   it("EDIT the order", async () => {
    //     const response = await supertest(app).put("/api/store/order/3").send({
    //       "name":"order20",
    //       "status":"delivered",
    //       "token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmcmlzdE5hbWUiOiJtb3MiLCJsYXN0TmFtZSI6Im1vcyIsImlhdCI6MTY1OTYyNzQ0OX0.u2C7_tvbAHTKMde_oBw0VnXrgCLy7GchK9BmB5mK-64"
    //   }).set('Accept','application/json').set("Content-Type","application/json")

      
    //     expect(response.status).toBe(200);
    //     //.log(response)
        
    //   });
      
})

  