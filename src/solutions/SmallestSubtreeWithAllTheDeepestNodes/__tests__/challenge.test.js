import subtreeWithAllDeepest from '../index';

/**
 *           3
 *         /  \
 *       5     1
 *     /  \   / \
 *    6   2  0   8
 *       / \
 *      7   4
 */
const TREE = {
  "val": 3,
  "right": {
    "val": 1,
    "right": {
      "val": 8,
      "right": null,
      "left": null
    },
    "left": {
      "val": 0,
      "right": null,
      "left": null
    }
  },
  "left": {
    "val": 5,
    "right": {
      "val": 2,
      "right": {
        "val": 4,
        "right": null,
        "left": null
      },
      "left": {
        "val": 7,
        "right": null,
        "left": null
      }
    },
    "left": {
      "val": 6,
      "right": null,
      "left": null
    }
  }
};

describe('smallestSubtreeWithAllTheDeepestNodes', () => {
  it('works correctly', () => {
    expect(subtreeWithAllDeepest(TREE).val).toBe(2);
  });
});
