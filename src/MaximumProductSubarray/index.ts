/**
 * MaximumProductSubarray
 * Given an integer array nums, find the contiguous subarray within an
 * array (containing at least one number) which has the largest product.
 *
 * Input: [2,3,-2,4]
 * Output: 6
 * Explanation: [2,3] has the largest product 6.
 * @param {number[]} nums
 * @return {number}
 */
const maximumProductSubarray = function(nums: number[]) {
  // Variables to store maximum and minimum
  // product till ith index.
  let minVal = nums[0];
  let maxVal = nums[0];

  let maxProduct = nums[0];

  for (let i = 1; i < nums.length; i++) {
    // When multiplied by -ve number,
    // maxVal becomes minVal
    // and minVal becomes maxVal.
    if (nums[i] < 0) {
      const temp = maxVal;
      maxVal = minVal;
      minVal = temp;
    }

    // maxVal and minVal stores the
    // product of subarray ending at nums[i].
    maxVal = Math.max(nums[i], maxVal * nums[i]);
    minVal = Math.min(nums[i], minVal * nums[i]);

    // Max Product of array.
    maxProduct = Math.max(maxProduct, maxVal);
  }

  // Return maximum product found in array.
  return maxProduct;
};

export default maximumProductSubarray;
