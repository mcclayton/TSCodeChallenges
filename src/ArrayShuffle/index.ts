/**
 * Shuffle a set of numbers without duplicates.
 */

/**
 * @param {number[]} nums
 * Time complexity of the Fisher-Yates shuffle is O(n).
 */
const shuffle = function(nums: number[]) {
  for (let i=0; i < nums.length; i++) {
    // Choose a random index from the current index (inclusively) to the
    // last index in the array. Swap the elements and increment the index.
    const swapIdx = getRandomInt(i, nums.length - 1);

    // Swap the elements in the original array to accomplish this in-place and
    // O(1) space complexity.
    const curr = nums[i];
    nums[i] = nums[swapIdx];
    nums[swapIdx] = curr;
  }
  // Return original array, but shuffled
  return nums;
};

function getRandomInt(min: number, max: number) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export default shuffle;
