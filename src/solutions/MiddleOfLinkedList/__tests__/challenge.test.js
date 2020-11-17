import middleOfLinkedList, { ListNode } from '../index';

describe('middleOfLinkedList', () => {
  it('works correctly with list of size > 1', () => {
    const l = new ListNode(
      1,
      new ListNode(
        2,
        new ListNode(
          3,
          new ListNode(
            4,
            null
          )
        )
      )
    );
    expect(middleOfLinkedList(l).val).toBe(3);
  });

  it('works correctly with list of size 1', () => {
    const l = new ListNode(1);
    expect(middleOfLinkedList(l).val).toBe(1);
  });

  it('works correctly with empty list', () => {
    const l = null;
    expect(middleOfLinkedList(l)).toBe(null);
  });
});
