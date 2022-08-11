import { order, ordersCRUD } from '../models/orders'
const crud = new ordersCRUD()

describe('***orders functions test***', () => {
  it('--index is not null ', async () => {
    expect(crud.index).not.toBeNull()
  })
  it('--show is not false ', async () => {
    expect(crud.show).not.toBeFalse()
  })
  it('--create is defined ', async () => {
    expect(crud.create).toBeDefined()
  })
  it('--edit is not equal "1" ', async () => {
    expect(crud.edit).not.toEqual(1)
  })
  it('--delete is defined ', async () => {
    expect(crud.delete).toBeDefined()
  })
})

// it('--delete not throw error ', async () => {
//   expect(crud.delete).not.toThrow(new Error());
// });
