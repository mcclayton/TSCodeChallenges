import { LinkedListNode } from '../../types';

/**
 * PalindromeLinkedList
 * Given a singly linked list, determine if it is a palindrome in O(n) time and O(1) space.
 */
const palindromeLinkedList = function (head: LinkedListNode<number>) {
  // Empty and single item list is a palindrome
  if (head == null || head.next == null) {
    return true;
  }

  // Find list center with rabbit/hare nodes
  let fast = head;
  let slow = head;

  // Fast node travels twice as fast towards the end
  // Slow node ends up at the center node
  while (fast.next !== null && fast.next.next !== null) {
    fast = fast.next.next;
    slow = slow.next;
  }

  // The head of the list from middle to end
  let secondHead = slow.next;
  slow.next = null;

  // Reverse second part of the list
  let p1 = secondHead;
  let p2 = p1.next;
  while (p1 !== null && p2 !== null) {
    let temp = p2.next;
    p2.next = p1;
    p1 = p2;
    p2 = temp;
  }
  secondHead.next = null;

  // First half of list
  let firstHalf = head;
  // Properly get the beginning of the second list
  let secondHalf = p2 === null ? p1 : p2;

  // Compare two sublists now
  while (secondHalf !== null) {
    if (secondHalf.val !== firstHalf.val) {
      // Found a value that didn't match
      return false;
    }
    secondHalf = secondHalf.next;
    firstHalf = firstHalf.next;
  }

  // If all values of list were equal, then return true
  return true;
};

export default palindromeLinkedList;
