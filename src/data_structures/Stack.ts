export default class Stack {
  stack: any[];
  constructor() {
    this.stack = [];
  }

  push(val: any) {
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
};
