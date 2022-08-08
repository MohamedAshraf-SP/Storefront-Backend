import {Request} from 'express';
import supertest from 'supertest';
import app from '../server';
import {product, productCRUD} from '../models/products'
const tst =supertest(app);
describe('***My product endpoint checker ***', () => {

    it("GET all products", async () => {
        const response = await supertest(app).get("/api/store/products");
      
        expect(response.status).toBe(200);
       // console.log(response)
        
      });
    it("SHOW a product", async () => {
        const response = await supertest(app).get("/api/store/product/31");
      
        expect(response.status).toBe(200);
       // console.log(response)
        
      });
    it("DELETE a product", async () => {
        const response = await supertest(app).get("/api/store/product/32");
      
        expect(response.status).toBe(200);
       // console.log(response)
        
      });
    it("CREATE the product", async () => {
        const response = await supertest(app).post("/api/store/product").send({
            "name": "ADDE", 
            "price": 40  ,
            "token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmcmlzdE5hbWUiOiJtb3MiLCJsYXN0TmFtZSI6Im1vcyIsImlhdCI6MTY1OTYyNzQ0OX0.u2C7_tvbAHTKMde_oBw0VnXrgCLy7GchK9BmB5mK-64"

          }).set('Accept','application/json').set("Content-Type","application/json")

      
        expect(response.status).toBe(200);
        //.log(response)
        
      });

      it("EDIT the product", async () => {
        const response = await supertest(app).put("/api/store/product/?id=22").send({
            "name": "ADDE", 
            "price": 40  ,
            "token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmcmlzdE5hbWUiOiJtb3MiLCJsYXN0TmFtZSI6Im1vcyIsImlhdCI6MTY1OTYyNzQ0OX0.u2C7_tvbAHTKMde_oBw0VnXrgCLy7GchK9BmB5mK-64"

          }).set('Accept','application/json').set("Content-Type","application/json")

      
        expect(response.status).toBe(200);
        //.log(response)
        
      });
      
})

  