import LinkedList, { ListNode } from '../../data_structures/LinkedList';

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * You are given two non-empty linked lists representing two non-negative integers.
 * The digits are stored in reverse order and each of their nodes contain a single digit.
 * Add the two numbers and return it as a linked list.
 * You may assume the two numbers do not contain any leading zero, except the number 0 itself.
 *
 * Example:
 * Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
 * Output: 7 -> 0 -> 8
 * Explanation: 342 + 465 = 807.
 *
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1: ListNode<number>, l2: ListNode<number>) {
  const resultList = new LinkedList();
  // Keep track of the sum's carry-over value
  // Since the linkedlists are in reverse, we can just keep moving the carry-over as we traverse the
  // list from head to tail since this is from least significant digit towards most significant digit.
  let carry = 0;

  // While we haven't reached the end of both lists
  while (l1 !== null || l2 !== null) {
    // Values are either the curent value or zero if we've reached the end of the list
    const valOne = l1 === null ? 0 : l1.val;
    const valTwo = l2 === null ? 0 : l2.val;
    // The sum of the two nodes is the sum of the values plus the carry-over
    const sum = valOne + valTwo + carry;

    // Compute the carry-over value to move to the next node values
    carry = sum >= 10 ? 1 : 0;
    // The digit to add to the list is the sum or the (sum - 10) if there is a carry-over value
    const digitToAdd = sum >= 10 ? (sum - 10) : sum;
    resultList.push(digitToAdd);

    // Continue traversing if possible
    if (l1 !== null) {
      l1 = l1.next;
    }
    if (l2 !== null) {
      l2 = l2.next;
    }
  }
  // Once we have reached the end of both lists, if there is a leftover carry-over, add it to the list
  if (carry) {
    resultList.push(carry);
  }
  return resultList;
};

export default addTwoNumbers;
