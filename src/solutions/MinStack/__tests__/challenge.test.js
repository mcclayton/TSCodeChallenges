import MinStack from '../index';

describe('MinStack', () => {
  let minStack;

  beforeAll(() => {
    minStack = new MinStack();
    minStack.push(-2);
    minStack.push(0);
    minStack.push(-3);
  });

  it('works correctly', () => {
    expect(minStack.getMin()).toBe(-3);
    expect(minStack.pop()).toBeUndefined();
    expect(minStack.top()).toBe(0);
    expect(minStack.getMin()).toBe(-2);
  });
});
