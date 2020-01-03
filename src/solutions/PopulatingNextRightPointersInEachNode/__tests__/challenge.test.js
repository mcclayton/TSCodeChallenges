import connect from '../index';

/**
 *          3
 *         / \
 *       4   5
 *      / \
 *     1   2
 */
const TREE = {
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

const EXPECTED = {
  "val": 3,
  "right": {
    "val": 5,
    "right": null,
    "left": null,
    "next": null
  },
  "left": {
    "val": 4,
    "right": {
      "val": 2,
      "right": null,
      "left": null,
      "next": null
    },
    "left": {
      "val": 1,
      "right": null,
      "left": null,
      "next": {
        "val": 2,
        "right": null,
        "left": null,
        "next": null
      }
    },
    "next": {
      "val": 5,
      "right": null,
      "left": null,
      "next": null
    }
  },
  "next": null
};

describe('connect', () => {
  it('connects all the tree pointers correctly', () => {
    expect(connect(TREE)).toEqual(EXPECTED);
  });
});
