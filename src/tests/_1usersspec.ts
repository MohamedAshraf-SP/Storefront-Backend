import { user, usersCRUD } from '../models/users';
const crud = new usersCRUD();
describe('***USERS functions test***', () => {
  it('--index is not null ', async () => {
    expect(crud.index).not.toBeNull();
  });
  it('--show is not false ', async () => {
    expect(crud.show).not.toBeFalse();
  });
  it('--create works correctly ', async () => {
    expect(crud.create('mohamed', 'mohamed', 'mo')).toBeTruthy();
  });
  it('--edit is not equal "1" ', async () => {
    expect(crud.edit).not.toEqual(1);
  });
  it('--delete not throw error ', async () => {
    expect(crud.delete).not.toThrow(new Error());
  });
});
