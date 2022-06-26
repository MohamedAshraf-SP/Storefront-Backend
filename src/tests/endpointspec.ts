import supertest from 'supertest';
import app from '../server';

const req =supertest(app);
// eslint-disable-next-line @typescript-eslint/ban-types
describe('***My endpoint checker ***', () => {
    
    it('--Check If status code is 200', async () => {
        const res=req.get('/api/image')
        expect((await res).status).toBe(200)
      
    });
});

