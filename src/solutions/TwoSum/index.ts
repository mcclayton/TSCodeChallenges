/**
 * Two Sum Problem
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function (nums: number[], target: number) {
  const map: IHash = {};
  for (let i = 0; i < nums.length; i++) {
    map[nums[i]] = i;
  }

  for (let i = 0; i < nums.length; i++) {
    const compliment = target - nums[i];
    if (map[compliment] !== undefined && map[compliment] !== i) {
      return [i, map[compliment]];
    }
  }
};

interface IHash {
  [key: number]: number
};

export default twoSum;
