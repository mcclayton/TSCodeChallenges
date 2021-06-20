import maximumLevelSumOfBinaryTree from '../index';

/**
 *          1
 *         / \
 *       7   0
 *      / \
 *     7   -8
 */
const TREE = {
  "val": 1,
  "right": {
    "val": 0,
    "right": null,
    "left": null
  },
  "left": {
    "val": 7,
    "right": {
      "val": -8,
      "right": null,
      "left": null
    },
    "left": {
      "val": 7,
      "right": null,
      "left": null
    }
  }
};

describe('maximumLevelSumOfBinaryTree', () => {
  it('works correctly', () => {
    expect(maximumLevelSumOfBinaryTree(TREE)).toBe(2);
  });
});
