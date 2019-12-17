/**
 * Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
 * An input string is valid if:
 *
 * Open brackets must be closed by the same type of brackets.
 * Open brackets must be closed in the correct order.
 * Note that an empty string is also considered valid.
 */

import Stack from '../data_structures/Stack';

/**
 * @param {string} s
 * @return {boolean}
 */
const isValid = function(s: string) {
  // Empty string is balanced
  if (s.length === 0) {
    return true;
  } else if ((s.length % 2) !== 0) {
    // If odd number of characters, then expression is unbalanced
    return false;
  }

  const stack = new Stack();

  const values = s.split('');
  for (let i=0; i<values.length; i++) {
    const val = values[i];
    if (val === '{' || val === '[' || val === '(') {
      // If the character is an opening bracket, push it to the stack
      stack.push(val);
    } else {
      if (stack.isEmpty()) {
        // If the stack is empty, then we are hitting an unbalanced closing bracket
        return false;
      } else {
        // Remove the last character from the stack.
        // If last character in stack is not the matching opening bracket
        // then expression is unbalanced
        const lastChar = stack.pop();
        if (lastChar !== PAREN_COMPLIMENTS[val]) {
          return false;
        }
      }
    }
  };

  // If the stack is not empty, then there is an extra opening bracket
  return stack.isEmpty();
};

interface IParens {
  [key: string]: string;
}

const PAREN_COMPLIMENTS: IParens = {
  '}': '{',
  ')': '(',
  ']': '['
};

export default isValid;
