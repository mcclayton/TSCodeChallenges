import findLongestWord from '../index';

describe('findLongestWord', () => {
  it('works correctly', () => {
    expect(findLongestWord("abpcplea", ["ale", "apple", "monkey", "plea"])).toBe("apple");
  });
});
