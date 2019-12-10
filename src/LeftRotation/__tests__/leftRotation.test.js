import rotateLeft from '../index';

describe('rotateLeft', () => {
  it('rotates the array correctly to the left', () => {
    const expected = [5, 1, 2, 3, 4];
    expect(rotateLeft([1, 2, 3, 4, 5], 4)).toEqual(expected);
  });
});
