import maxDepth from '../index';

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

describe('maxDepth', () => {
  it('returns correct depth for tree', () => {
    expect(maxDepth(TREE)).toBe(3);
  });

  it('returns correct depth for empty tree', () => {
    expect(maxDepth(null)).toBe(0);
  });
});
