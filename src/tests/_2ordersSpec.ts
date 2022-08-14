import { order, ordersCRUD } from '../models/orders';
const crud = new ordersCRUD();

describe('***orders functions test***', () => {
  const store = new ordersCRUD();

  const order = {
    id: undefined as unknown as number,
    name: 'Legion Laptop',
    status: 'delivered',
    user_id: 11 as unknown as string,
  };

  describe('test order model methods', () => {
    it('fetch all orders', async function () {
      const order = {
        id: undefined as unknown as number,
        name: 'Legion Laptop',
        status: 'delivered',
        user_id: 11 as unknown as string,
      };
      await store.create(order.name, order.status, order.user_id, '166');
      const orders = await store.index();

      expect(orders.length).toBeGreaterThan(0);
    });
  });
  it('--index is not null ', async () => {
    expect(crud.index).not.toBeNull();
  });
  it('--show is not false ', async () => {
    expect(crud.show).not.toBeFalse();
  });
  it('--create is working ', async () => {
    const order = {
      id: undefined as unknown as number,
      name: 'Legion Laptop',
      status: 'delivered',
      user_id: 11 as unknown as string,
    };

    const res = await store.create(
      order.name,
      order.status,
      order.user_id,
      '166'
    );

    expect(res).toEqual({ name: 'Legion Laptop', status: 'delivered' });
  });
  it('--edit is not equal "1" ', async () => {
    const order = {
      id: undefined as unknown as number,
      name: 'Legion Laptop',
      status: 'delivered',
      user_id: 11 as unknown as string,
    };

    const res = await store.edit(order.user_id, order.name, order.status);

    expect(res).toEqual({ name: 'Legion Laptop', status: 'delivered' });
  });

  it('--delete is defined ', async () => {
    const res = await store.create(
      order.name,
      order.status,
      order.user_id,
      '166'
    );
    expect(crud.delete('166')).toBeTruthy();
  });

  // it('--delete not throw error ', async () => {
  //   expect(crud.delete).not.toThrow(new Error());
});
