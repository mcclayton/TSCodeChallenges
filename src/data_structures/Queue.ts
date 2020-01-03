export default class Queue<T = any> {
  queue: T[];
  constructor() {
    this.queue = [];
  }

  add(val: T) {
    this.queue.push(val);
  }

  enqueue(val: T) {
    this.add(val);
  }

  peek() {
    return this.isEmpty() ? null : this.queue[0];
  }

  poll() {
    return this.isEmpty() ? null : this.queue.shift();
  }

  dequeue() {
    this.poll();
  }

  size() {
    return this.queue.length;
  }

  isEmpty() {
    return this.size() === 0;
  }
};
