import KthLargest from '../index';

describe('kthLargestElementInAStream', () => {
  it('retrieves the kth max while adding numbers from a stream', () => {
    const kLargest = new KthLargest(3, [4, 5, 8, 2]);
    expect(kLargest.add(3)).toBe(4);
    expect(kLargest.add(5)).toBe(5);
    expect(kLargest.add(10)).toBe(5);
    expect(kLargest.add(9)).toBe(8);
    expect(kLargest.add(4)).toBe(8);
  });
});
