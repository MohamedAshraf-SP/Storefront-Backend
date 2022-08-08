import { order, ordersCRUD } from '../models/orders';
const crud = new ordersCRUD();

describe('***orders functions test***', () => {
  it('--index is defined ', async () => {
    expect(crud.index).toBeDefined();
  });
  it('--show is defined ', async () => {
    expect(crud.show).toBeDefined();
  });
  it('--create is defined ', async () => {
    expect(crud.create).toBeDefined();
  });
  it('--edit is defined ', async () => {
    expect(crud.edit).toBeDefined();
  });
  it('--delete is defined ', async () => {
    expect(crud.delete).toBeDefined();
  });
});
