export class ListNode<T = any> {
  next: ListNode<T> | null;
  val: T;
  constructor(val: T) {
    this.next = null;
    this.val = val;
  }
};

export default class LinkedList<T = any> {
  root: ListNode<T> | null;
  constructor(root: ListNode<T> | null = null) {
    this.root = root;
  }

  head() {
    return this.root;
  }

  push(val: T) {
    const node = new ListNode(val);
    if (this.isEmpty()) {
      this.root = node;
    } else {
      let tail = this.root;
      while (tail.next !== null) {
        tail = tail.next;
      }
      tail.next = node;
    }
  }

  isEmpty() {
    return this.root === null;
  }

  toArray() {
    const values = [];
    let curr = this.root;
    while(curr !== null) {
      values.push(curr.val);
      curr = curr.next;
    }
    return values;
  }
};
