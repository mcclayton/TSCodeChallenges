/**
 * FirstMissingPositive
 * @param {number[]} nums The array of numbers
 * @return {number} The first missing positive number
 */
function firstMissingPositive(nums: number[]): number {
  let map: Record<number, boolean> = {};
  nums.forEach((n) => {
    if (n>=0 && n <= nums.length) {
      map[n] = true;
    }
  });

  // Starting from index 1 (The first positive integer)
  // From 1 through the length of the array:
  // Check to see if that number is in the original array
  // If yes, continue
  // If no, that *index* is the value of the first positive integer missing
  // If all index values are in the original array, that means that the original array
  // contained all numbers from (1 - N), so N+1 is the first missing positive value (Where N=Length of array)
  for(let i=1; i<=nums.length; i++) {
    if (!map[i]) {
      return i;
    }
  }
  return nums.length + 1;
};

export default firstMissingPositive;
