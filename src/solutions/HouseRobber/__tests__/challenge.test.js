import rob from '../index';

describe('houseRobber', () => {
  it('works correctly', () => {
    expect(rob([1, 2, 3, 1])).toBe(4);
    expect(rob([2, 7, 9, 3, 1])).toBe(12);
  });
});
