/**
 * MinStack
 */

type Undefinable<T> = T | undefined;

class MinStack {
  private stack: number[];
  private minStack: number[];

  constructor() {
    this.stack = [];
    this.minStack = [];
  }

  push(x: number) {
    if (this.minStack.length === 0) {
      this.minStack.push(x);
    } else {
      // With each push, always push the current minimum to the minStack
      this.minStack.push(Math.min(x, this.getMin()))
    }
    this.stack.push(x);
  }

  pop(): void {
    this.minStack.pop()
    this.stack.pop();
  }

  top(): Undefinable<number> {
    return this.stack[this.stack.length - 1];
  }

  getMin(): Undefinable<number> {
    return this.minStack[this.minStack.length - 1];
  }
}

export default MinStack;
