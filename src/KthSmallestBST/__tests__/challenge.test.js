import kthSmallest from '../index';

/*
 * Example:
 * Input: root = [5,3,6,2,4,null,null,1], k = 3
 *       5
 *      / \
 *     3   6
 *    / \
 *   2   4
 *  /
 * 1
 *
 * Would return `3`, as 3 is the third smallest number in the BST
 */

const TREE = {
  "val": 5,
  "right": {
    "val": 6,
    "right": null,
    "left": null
  },
  "left": {
    "val": 3,
    "right": {
      "val": 4,
      "right": null,
      "left": null
    },
    "left": {
      "val": 2,
      "right": null,
      "left": {
        "val": 1,
        "right": null,
        "left": null
      }
    }
  }
};

describe('kthSmallest', () => {
  it('works correctly', () => {
    expect(kthSmallest(TREE, 1)).toBe(1);
    expect(kthSmallest(TREE, 3)).toBe(3);
    expect(kthSmallest(TREE, 4)).toBe(4);
  });
});
