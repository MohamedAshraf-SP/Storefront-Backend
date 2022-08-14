import { equal } from 'assert';
import { product, productCRUD } from '../models/products';
const crud = new productCRUD();

describe('***product functions test***', () => {
  it('--index is not null ', async () => {
    expect(crud.index).not.toBeNull();
  });

  it('--show is correctly return the product ', async () => {
    const result = await crud.show('166');
    expect(result).toEqual({
      id: 166,
      name: 'ADDE',
      price: 40,
    });
  });

  it('--create is creates correctly ', async () => {
    expect(await crud.create('name', 50)).toEqual({ name: 'name', price: 50 });
  });
  it('--edit is successfully edits ', async () => {
    expect(await crud.edit('50', 'name', 50)).toEqual({
      name: 'name',
      price: 50,
    });
  });
  it('--delete not throw error ', async () => {
    expect(crud.delete).not.toThrow(new Error());
  });
});
