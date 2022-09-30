/**
 * Two Sum Problem
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function (nums: number[], target: number) {
  // Create a map { [number]: indexOfNumber }
  const map: IHash = {};
  for (let i = 0; i < nums.length; i++) {
    map[nums[i]] = i;
  }

  // For each number, check to see if the compliment of the number
  // (Example. Target: 9, Number: 7, Complement: 9 - 7 = 2)
  // is in the hashmap. If the compliment is in the map, and isn't the current number
  // then return the pair of indeces.
  for (let i = 0; i < nums.length; i++) {
    const compliment = target - nums[i];
    if (map[compliment] !== undefined && map[compliment] !== i) {
      return [i, map[compliment]];
    }
  }
};

interface IHash {
  [key: number]: number;
}

export default twoSum;
