import isSubtree from '../index';
/**
 *          3
 *         / \
 *       4   5
 *      / \
 *     1   2
 */
const TREE_S = {
  "val": 3,
  "right": {
    "val": 5,
    "right": null,
    "left": null
  },
  "left": {
    "val": 4,
    "right": {
      "val": 2,
      "right": null,
      "left": null
    },
    "left": {
      "val": 1,
      "right": null,
      "left": null
    }
  }
};

/**
 *          3
 *         / \
 *       4   5
 *      / \
 *     1   2
 */
const TREE_T = {
  "val": 4,
  "right": {
    "val": 2,
    "right": null,
    "left": null
  },
  "left": {
    "val": 1,
    "right": null,
    "left": null
  }
};

const TREE_T_NOT_SUBTREE = {
  "val": 4,
  "right": {
    "val": 2,
    "right": null,
    "left": null
  },
  "left": {
    "val": 1,
    "right": {
      "val": 7,
      "right": null,
      "left": null
    },
    "left": null
  }
};

describe('isSubtree', () => {
  it('returns true when `t` is subtree of `s`', () => {
    expect(isSubtree(TREE_S, TREE_T)).toBe(true);
  });

  it('returns false when `t` is not subtree of `s`', () => {
    expect(isSubtree(TREE_S, TREE_T_NOT_SUBTREE)).toBe(false);
  });
});
