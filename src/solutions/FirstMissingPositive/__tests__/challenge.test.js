import firstMissingPositive from '../index';

describe('firstMissingPositive', () => {
  it('works correctly', () => {
    expect(firstMissingPositive([1,2,0])).toBe(3);
    expect(firstMissingPositive([3,4,-1,1])).toBe(2);
    expect(firstMissingPositive([7,8,9,11,12])).toBe(1);
    expect(firstMissingPositive([1])).toBe(2);
    expect(firstMissingPositive([-1, -2, -3, -4, 0])).toBe(1);
  });
});
