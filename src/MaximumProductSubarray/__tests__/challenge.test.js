import maximumProductSubarray from '../index';

describe('maximumProductSubarray', () => {
  it('works correctly', () => {
    expect(maximumProductSubarray([2, 3, -2, 4])).toBe(6);
    expect(maximumProductSubarray([-2, 0, -1])).toBe(0);
  });
});
