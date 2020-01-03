import levelOrderTraversal from '../index';

/**
 *          3
 *         / \
 *       9   20
 *          / \
 *        15   7
 */
const TREE = {
  "val": 3,
  "right": {
    "val": 20,
    "right": {
      "val": 7,
      "right": null,
      "left": null
    },
    "left": {
      "val": 15,
      "right": null,
      "left": null
    }
  },
  "left": {
    "val": 9,
    "right": null,
    "left": null
  }
};

describe('binaryTreeLevelOrderTraversal', () => {
  it('works correctly', () => {
    const expected = [
      [3],
      [9, 20],
      [15, 7]
    ];
    expect(levelOrderTraversal(TREE)).toEqual(expected);
  });
});
