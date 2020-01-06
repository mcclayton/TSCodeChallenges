import addTwoNumbers from '../index';

// 2 -> 4 -> 3
const LINKED_LIST_ONE = {
  val: 2,
  next: {
    val: 4,
    next: {
      val: 3,
      next: null
    }
  }
};

// 5 -> 6 -> 4
const LINKED_LIST_TWO = {
  val: 5,
  next: {
    val: 6,
    next: {
      val: 4,
      next: null
    }
  }
};

describe('addTwoNumbers', () => {
  it('works correctly', () => {
    const list = addTwoNumbers(LINKED_LIST_ONE, LINKED_LIST_TWO);
    expect(list.toArray()).toEqual([7, 0, 8]);
  });
});
