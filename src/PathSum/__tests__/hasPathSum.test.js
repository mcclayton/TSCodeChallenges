import hasPathSum from '../index';

/**
 *           5
 *         /  \
 *       4    8
 *      /    /  \
 *     11  13    4
 *    /  \        \
 *   7    2        1
 */
const TREE = {
  "val": 5,
  "right": {
    "val": 8,
    "right": {
      "val": 4,
      "right": {
        "val": 1,
        "right": null,
        "left": null
      },
      "left": null
    },
    "left": {
      "val": 13,
      "right": null,
      "left": null
    }
  },
  "left": {
    "val": 4,
    "right": null,
    "left": {
      "val": 11,
      "right": {
        "val": 2,
        "right": null,
        "left": null
      },
      "left": {
        "val": 7,
        "right": null,
        "left": null
      }
    }
  }
};

describe('hasPathSum', () => {
  it('with valid root-to-path sum', () => {
    expect(hasPathSum(TREE, 22)).toEqual(true);
  });

  it('with no valid root-to-path sum', () => {
    expect(hasPathSum(TREE, 55)).toEqual(false);
  });

  it('with empty tree', () => {
    expect(hasPathSum(null, 0)).toEqual(false);
  });
});
