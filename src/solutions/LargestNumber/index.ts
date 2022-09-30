/**
 * @param {number[]} nums
 * @return {string}
 */
const largestNumber = function (nums: number[]) {
  // Sort with a custom comparator that cares about significant digits
  const sortedNums = nums.sort(cmp);

  // If, after being sorted, the largest number is `0`, the entire number
  // is zero.
  if (sortedNums[0] === 0) {
    return '0';
  } else {
    return sortedNums.join('');
  }
};

const cmp = (x: number, y: number) => {
  // Ensure that the most significant digits are occupied by the largest digits
  // by comparing "x"+"y" to "y"+"x".
  // Ex. x="3", y="30".
  // "330" > "303" -- so we return that x=3 > y=30.
  return `${y}${x}`.localeCompare(`${x}${y}`);
};

export default largestNumber;
