import isValid from '../index';

describe('isValid', () => {
  describe('when given balanced expression', () => {
    it('returns true', () => {
      expect(isValid('{[()]}[]()')).toEqual(true);
    });
  });

  describe('when given unbalanced expression', () => {
    it('returns false', () => {
      expect(isValid('([)]')).toEqual(false);
    });
  });

  describe('when given empty string', () => {
    it('returns true', () => {
      expect(isValid('')).toEqual(true);
    });
  });
});
