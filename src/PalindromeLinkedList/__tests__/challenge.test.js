import palindromeLinkedList from '../index';

class LinkedListNode {
  constructor(val, next) {
    this.val = val;
    this.next = next || null;
  }
}

describe('palindromeLinkedList', () => {
  it('returns true for single-item list', () => {
    const l = new LinkedListNode(1, null);
    expect(palindromeLinkedList(l)).toBe(true);
  });

  it('returns true for empty list', () => {
    expect(palindromeLinkedList(null)).toBe(true);
  });

  it('returns true for palindrome list', () => {
    // 1->2->2->1
    const l = new LinkedListNode(
      1,
      new LinkedListNode(
        2,
        new LinkedListNode(
          2,
          new LinkedListNode(
            1,
            null
          )
        )
      )
    );
    expect(palindromeLinkedList(l)).toBe(true);
  });

  it('returns false for non-palindrome list', () => {
    // 1->2->2
    const l = new LinkedListNode(
      1,
      new LinkedListNode(
        2,
        new LinkedListNode(
          2,
          null
        )
      )
    );
    expect(palindromeLinkedList(l)).toBe(false);
  });
});
