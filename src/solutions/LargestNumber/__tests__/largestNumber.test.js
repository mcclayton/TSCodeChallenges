import largestNumber from '../index';

describe('largestNumber', () => {
  describe('when given array non-negative numbers', () => {
    it('correctly generates largest number string', () => {
      const expected = "9534330";
      expect(largestNumber([3, 30, 34, 5, 9])).toEqual(expected);
    });
  });

  describe('when given array of large numbers', () => {
    it('correctly generates largest number string', () => {
      const expected = "999999900946732864123455";
      expect(largestNumber([946732864, 999999900, 123455])).toEqual(expected);
    });
  });

  describe('when given array of multiple zeros', () => {
    it('correctly generates largest number string', () => {
      const expected = "0";
      expect(largestNumber([0, 0])).toEqual(expected);
    });
  });
});
