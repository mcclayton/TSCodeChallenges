import coinPath from '../index';

describe('coinPath', () => {
  it('works correctly', () => {
    expect(coinPath([
      [1, 2, 3],
      [4, 6, 5],
      [3, 2, 1]
    ])).toBe(2);
  });
});
