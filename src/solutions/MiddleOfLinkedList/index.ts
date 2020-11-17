/**
 * MiddleOfLinkedList
 */
function middleOfLinkedList(head: ListNode | null): ListNode | null {
  let normalPtr: ListNode | null | undefined = head; // Travels one node at a time
  let fastPtr: ListNode | null | undefined = head?.next; // Travels at 2x speed
  while(fastPtr) {
    normalPtr = normalPtr?.next;
    fastPtr = fastPtr?.next?.next;
  }
  return normalPtr || null;
};

export class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = (val === undefined ? 0 : val);
    this.next = (next === undefined ? null : next);
  }
}

export default middleOfLinkedList;
