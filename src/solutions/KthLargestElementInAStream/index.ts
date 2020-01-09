/**
 * Design a class to find the kth largest element in a stream.
 * Note that it is the kth largest element in the sorted order,
 * not the kth distinct element.
 *
 * Your KthLargest class will have a constructor which accepts an integer k
 * and an integer array nums, which contains initial elements from the stream.
 * For each call to the method KthLargest.add, return the element representing
 * the kth largest element in the stream.
 */
/**
 * @param {number} k
 * @param {number[]} nums
 * Time Complexities:
 * Instantiation: O(N*log(N))
 * Insert: O(N) (Takes O(logN) to find index to insert, but JS array insertion with splice is linear.
 * Retrieve kth max O(1)
 */
const KthLargest = function(k: number, nums: number[]) {
  this.k = k;
  // Perform an original sort of numbers in O(N*log(N))
  this.nums = nums.sort((a: number, b: number) => (a - b));
};

/**
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function(val: number) {
  this.nums.splice(binaryFindInsertionIdx(this.nums, val), 0, val);
  return this.nums[this.nums.length - this.k];
};

// Binary search for the index to insert the element into
// Time Complexity: O(log(n))
const binaryFindInsertionIdx = (arr: number[], val: number) => {
  let start = 0;
  let end = arr.length - 1;

  // Iterate while start not meets end
  while (start <= end) {
    // Find the mid index
    const mid = Math.floor((start + end) / 2);

    // If element is present at mid, return True
    if (arr[mid] === val) {
      // We found an equivalent value, so we can insert the element at this index
      return mid;
    } else if (arr[mid] < val) {
      // Else look in left or right half accordingly
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  // The element is unique in the array
  return end === -1 ? 0 : start;
};

export default KthLargest;
