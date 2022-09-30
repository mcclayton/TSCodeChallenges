export default class Stack<T = any> {
  stack: T[];
  constructor() {
    this.stack = [];
  }

  push(val: T) {
    return this.stack.push(val);
  }

  pop() {
    return this.stack.pop();
  }

  peek() {
    return this.stack[this.stack.length - 1];
  }

  isEmpty() {
    return this.stack.length === 0;
  }
}
