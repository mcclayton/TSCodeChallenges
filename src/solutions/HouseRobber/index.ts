/**
 * You are a professional robber planning to rob houses along a street.
 * Each house has a certain amount of money stashed, the only constraint
 * stopping you from robbing each of them is that adjacent houses have
 * security system connected and it will automatically contact the police if
 * two adjacent houses were broken into on the same night.
 *
 * Given a list of non-negative integers representing the amount of money of
 * each house, determine the maximum amount of money you can rob tonight
 * without alerting the police.
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
const rob = function (nums: number[]) {
  const memo: MemoizedResults = {};
  // Recursive relation:
  // A robber has 2 options:
  // a) Rob current house i;
  // b) Don't rob current house.
  // If an option "a" is selected it means they can't rob previous i-1 house
  // but can safely proceed to the one before previous i-2 and gets all cumulative
  // loot that follows.
  // If an option "b" is selected the robber gets all the possible loot from
  // robbery of i - 1 and all the following buildings.
  //
  // So it boils down to calculating what is more profitable:
  // A) Robbery of current house + loot from houses before the previous
  // B) Loot from the previous house robbery and any loot captured before that
  //
  const getMaxRob = (nums: number[], i: number) => {
    // Recursive base case
    if (i < 0) {
      return 0;
    }
    // If we have already computed the result of this sub-problem, return it
    if (memo[i] >= 0) {
      return memo[i];
    }
    // Get the max of robbing either:
    // A) Robbery of current house + loot from houses before the previous
    // B) Robbery of current house + loot from houses before the previous
    const result = Math.max(
      getMaxRob(nums, i - 2) + nums[i],
      getMaxRob(nums, i - 1),
    );
    // Memoize the result of this sub-problem
    memo[i] = result;
    return result;
  };

  return getMaxRob(nums, nums.length - 1);
};

interface MemoizedResults {
  [key: number]: number;
}

export default rob;
